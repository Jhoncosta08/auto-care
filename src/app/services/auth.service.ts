import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import {NavController} from '@ionic/angular';
import {IUserInterface} from '../interfaces/user.interface';
import {BehaviorSubject, firstValueFrom, Observable} from 'rxjs';
import firebase from 'firebase/compat';
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import {ILoginInterface} from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: BehaviorSubject<IUserInterface | null> = new BehaviorSubject<IUserInterface | null>(null);

  constructor(
    private authFire: AngularFireAuth,
    private firestore: AngularFirestore,
    private navControl: NavController,
  ) {
    this.user.next(JSON.parse(localStorage.getItem('user')!));
  }

  async registerUser(user: IUserInterface): Promise<void> {
    if (user && user.email && user.password) {
      try {
        const userCredential: firebase.auth.UserCredential = await this.authFire.createUserWithEmailAndPassword(user.email, user.password);
        const userId: string | undefined = userCredential.user?.uid;
        if (userId) {
          const userData: IUserInterface = {
            uid: userId,
            displayName: user.displayName,
            email: user.email,
            createdAt: new Date().toLocaleDateString('pt-BR'),
          }
          await this.firestore.collection('users').doc(userId).set(userData);
          this.user.next(userData);
          await this.setUserInStorage(userData);
          await this.navControl.navigateForward('my-cars-list');
          return Promise.resolve();
        }
      } catch (err: any) {
        console.error('Error in register the new user', err);
        return Promise.reject(err);
      }
    } else {
      console.error('Error invalid user!');
      return Promise.reject();
    }
  }

  async login(userLoginForm: ILoginInterface): Promise<void> {
    if (userLoginForm && userLoginForm.email && userLoginForm.password) {
      try {
        const userCredential: firebase.auth.UserCredential = await this.authFire.signInWithEmailAndPassword(userLoginForm.email, userLoginForm.password);
        const userId: string | undefined = userCredential.user?.uid;
        const userDocRef: AngularFirestoreDocument<IUserInterface> = this.firestore.collection('users').doc<IUserInterface>(userId);
        const userDocObservable: Observable<DocumentSnapshot<IUserInterface>> = userDocRef.get();
        const userDoc: DocumentSnapshot<IUserInterface> = await firstValueFrom(userDocObservable);
        const userData: IUserInterface = userDoc.data() as IUserInterface;
        this.user.next(userData);
        await this.setUserInStorage(userData);
        await this.navControl.navigateForward('my-cars-list');
        return Promise.resolve();
      } catch (err: any) {
        console.error('Error in login', err);
        return Promise.reject(err);
      }
    } else {
      console.error('Error invalid user!');
      return Promise.reject();
    }
  }

  async setUserInStorage(user: IUserInterface): Promise<void> {
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve();
  }

  async logout(): Promise<void> {
    try {
      await this.authFire.signOut();
      localStorage.clear();
      this.user.next(null);
      await this.navControl.navigateBack('splash-screen-in');
      return Promise.resolve();
    } catch (err: any) {
      console.error('Error in logout user', err);
      return Promise.reject(err);
    }
  }

  async forgotPassword(email: string): Promise<void> {
    if (email) {
      try {
        await this.authFire.sendPasswordResetEmail(email);
        return Promise.resolve();
      } catch (err: any) {
        console.error('Error in forgot password', err);
        return Promise.reject(err);
      }
    } else {
      console.error('Error in forgot password, invalid email!');
      return Promise.reject('Invalid email');
    }
  }

}
