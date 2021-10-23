import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

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
export class LoadingComponent implements OnInit {
  @Input() loaded?: boolean;
  @Output() setLoaded = new EventEmitter<boolean>();
  readonly errorTime = 10000;
  timer = 0;
  timer$: Subject<number> = new Subject();
  constructor() {
    this.timer$.subscribe({
      next: (timer) => {
        this.timer = timer;
      },
      complete: () => {
        this.loaded = true;
        this.setLoaded.emit(this.loaded);
      },
    });
  }

  ngOnInit(): void {
    let timer = 0;
    const sti = setInterval(() => {
      this.timer$.next(++timer);
    }, 1000);
    setTimeout(() => {
      clearInterval(sti);
      this.timer$.complete();
    }, this.errorTime);
  }
}
