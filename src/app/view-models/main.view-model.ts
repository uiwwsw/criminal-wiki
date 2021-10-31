import { Injectable, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';
import { AngularRepository } from '../repositories/angular.repository';
@Injectable({
  providedIn: 'root',
})
export class MainViewModel {
  informations = ['d', '2'];
  criminal$: Observable<any>;
  constructor(private angularRepository: AngularRepository) {
    this.criminal$ = this.angularRepository.getCriminal(
      'name',
      '==',
      'dltkdgkssha'
    );
  }
}
