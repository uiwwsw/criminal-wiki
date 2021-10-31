import { Injectable, OnDestroy } from '@angular/core';
import {
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  auth: Auth;
  googleAuthProvider: GoogleAuthProvider;
  constructor() {
    this.auth = getAuth();
    this.googleAuthProvider = new GoogleAuthProvider();
  }

  logout() {
    return signOut(this.auth);
  }

  googleLogin() {
    return signInWithPopup(this.auth, this.googleAuthProvider);
  }
}
