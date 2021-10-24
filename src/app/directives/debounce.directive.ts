import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceEvent]',
})
export class DebounceEventDirective implements OnDestroy {
  @Input() debounceTime = 500;
  @Output() debounceEvent = new EventEmitter();
  private event$ = new Subject();

  constructor() {
    this.event$
      .pipe(debounceTime(this.debounceTime))
      .subscribe((e) => this.debounceEvent.emit(e));
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  trigger(event: Event) {
    this.event$.next(event);
  }
}
