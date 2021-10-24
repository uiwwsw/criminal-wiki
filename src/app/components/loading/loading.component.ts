import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { LoadingService } from 'src/app/services/loading.service';
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
