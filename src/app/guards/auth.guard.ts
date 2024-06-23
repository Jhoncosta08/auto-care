import {CanActivateFn, Router} from '@angular/router'
import {inject} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';


export const AuthGuard: CanActivateFn = async (): Promise<boolean> => {
  const auth: AngularFireAuth = inject(AngularFireAuth);
  const router: Router = inject(Router);
  const user: firebase.User | null = await auth.currentUser;
  if (user) {
    return true;
  } else {
    localStorage.removeItem('user');
    void router.navigate(['/splash-screen-in']);
    return false;
  }
};
