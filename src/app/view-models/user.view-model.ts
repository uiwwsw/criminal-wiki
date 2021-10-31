import { Injectable, OnDestroy } from '@angular/core';
import {
  GoogleAuthProvider,
  Auth,
  user,
  User,
  authInstance$,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserViewModel {
  private googleAuthProvider: GoogleAuthProvider;
  private auth!: Auth;
  user$: Observable<User | null>;
  constructor() {
    this.auth = getAuth();
    this.user$ = user(this.auth);
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  logout() {
    return signOut(this.auth);
  }

  googleLogin() {
    return signInWithPopup(this.auth, this.googleAuthProvider);
  }
}
