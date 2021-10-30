import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularService } from '../services/angular.service';
@Injectable({
  providedIn: 'root',
})
export class MainViewModel {
  informations = ['d', '2'];
  criminal$: Observable<any>;
  constructor(private as: AngularService) {
    console.log('djwalkjdlkajwldw');
    this.criminal$ = this.as.getCriminal('name', '==', 'dltkdgkssha');
  }
}
