import {CanActivateFn, Router} from '@angular/router'
import {inject} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import {map, take} from 'rxjs';


export const AuthGuard: CanActivateFn = () => {
  const auth: AngularFireAuth = inject(AngularFireAuth);
  const router: Router = inject(Router);
  return auth.authState.pipe(take(1), map((user: firebase.User | null): boolean => {
      if (user) {
        return true;
      } else {
        localStorage.removeItem('user');
        void router.navigate(['/splash-screen-in']);
        return false;
      }
    })
  );
};
