import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserViewModel } from 'src/app/view-models/user.view-model';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  id?: string;
  constructor(
    private route: ActivatedRoute,
    private userViewModel: UserViewModel,
    private router: Router
  ) {
    this.userViewModel.user$?.subscribe(
      (x) => !x && this.router.navigate(['auth'])
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.id) this.id = params.id;
    });
  }
}
