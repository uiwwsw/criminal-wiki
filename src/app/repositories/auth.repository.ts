import { Injectable, OnDestroy } from '@angular/core';
import {
  GoogleAuthProvider,
  signInWithPopup,
  Auth,
  User,
  signOut,
} from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthRepository {
  private googleAuthProvider: GoogleAuthProvider;
  private auth: Auth;
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