import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appKeyEvent]',
})
export class KeyEventDirective {
  @Input() keyEvent: string[] = [];
  @Output() click = new EventEmitter();

  constructor() {}

  @HostListener('blur', ['$event'])
  blurListener(event: MouseEvent) {
    if (!this.keyEvent.includes('blur')) return;
    event.preventDefault();
    event.stopPropagation();
    this.click.emit(event);
  }

  @HostListener('focus', ['$event'])
  focusListener(event: MouseEvent) {
    if (!this.keyEvent.includes('focus')) return;
    event.preventDefault();
    event.stopPropagation();
    this.click.emit(event);
  }

  @HostListener('keyup.enter', ['$event'])
  keyUpEnterListener(event: MouseEvent) {
    if (!this.keyEvent.includes('keyup.enter')) return;
    event.preventDefault();
    event.stopPropagation();
    this.click.emit(event);
  }
}
