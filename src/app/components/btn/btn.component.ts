import { Component, HostListener, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
const timer = 300;
@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(-50%, -50%) scale(0)' }),
        animate(
          `${timer / 1000}s ease-out`,
          style({ opacity: 1, transform: 'translate(-50%, -50%) scale(20)' })
        ),
      ]),
    ]),
  ],
})
export class BtnComponent {
  private clicked$ = new Subject();
  position = { x: 0, y: 0 };
  clicked = false;

  constructor() {
    this.clicked$
      .pipe(debounceTime(timer))
      .subscribe(() => (this.clicked = false));
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    this.clicked$.next();
    this.position = { x: event.offsetX, y: event.offsetY };
    this.clicked = true;
  }
}
