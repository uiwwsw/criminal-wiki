import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DEVICE } from './media-query.model';
@Injectable({
  providedIn: 'root',
})
export class MediaQueryService {
  private readonly breakPoint = 1024;
  mediaQuery = DEVICE.MOBILE;
  mediaQuery$: Subject<DEVICE> = new Subject();
  constructor() {
    this.mediaQuery$.subscribe((mediaQuery) => {
      this.mediaQuery = mediaQuery;
    });
  }
  onResize(width: number) {
    if (this.breakPoint > width && this.mediaQuery !== DEVICE.MOBILE)
      return this.mediaQuery$.next(DEVICE.MOBILE);
    if (this.breakPoint <= width && this.mediaQuery !== DEVICE.DESKTOP)
      return this.mediaQuery$.next(DEVICE.DESKTOP);
  }
}
