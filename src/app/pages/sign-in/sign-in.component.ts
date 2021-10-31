import { Component, OnInit } from '@angular/core';
import { AuthRepository } from 'src/app/repositories/auth.repository';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(public authRepository: AuthRepository) {}

  ngOnInit(): void {
    console.log(this.authRepository.auth);
  }
}
