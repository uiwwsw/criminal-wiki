import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DEVICE } from './media-query.model';
@Injectable({
  providedIn: 'root',
})
export class LoadingService implements OnDestroy {
  loading = false;
  loaded$: Subject<boolean> = new Subject();
  constructor() {
    this.loaded$.subscribe({
      next: () => {
        this.loading = true;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
  start() {
    this.loaded$.next();
  }
  end() {
    this.loaded$.complete();
  }
  ngOnDestroy() {
    this.loaded$.unsubscribe();
  }
}
