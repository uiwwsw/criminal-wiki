import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { faBars, faSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('.5s ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('.5s ease-in', style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class NavComponent implements OnInit {
  faBars = faBars;
  faSlash = faSlash;
  test = false;
  constructor() {}
  setTest() {
    this.test = !this.test;
  }
  ngOnInit(): void {}
}
