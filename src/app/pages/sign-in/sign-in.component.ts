import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';
import { UserViewModel } from 'src/app/view-models/user.view-model';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  user?: User | null;
  constructor(public userViewModel: UserViewModel, private router: Router) {
    this.userViewModel.user$.subscribe(
      (x) => x && this.router.navigate(['editor'])
    );
  }

  ngOnInit(): void {
    // console.log(this.userViewModel);
  }
}
