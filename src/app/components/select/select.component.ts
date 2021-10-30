import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MediaQueryService } from 'src/app/services/media-query.service';
import { DEVICE } from 'src/app/services/media-query.model';
import { SelectOption } from './select.componen.model';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  constructor(private mediaQueryService: MediaQueryService) {}
  @Input() value!: string;
  @Input() options: SelectOption[] = [];
  opend = false;
  get isSelected() {
    return this.options.find((x) => x.value === this.value) || this.options[0];
  }
  get isMobile() {
    return this.mediaQueryService.mediaQuery === DEVICE.MOBILE;
  }
  get isDesktop() {
    return this.mediaQueryService.mediaQuery === DEVICE.DESKTOP;
  }
  onBlur() {
    if (this.isDesktop && this.opend) this.opend = false;
  }
  onFocus() {
    if (this.isDesktop && !this.opend) this.opend = true;
  }
  onClick(value: string) {
    this.value = value;
    this.opend = false;
  }
  onChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
  }
  ngOnInit(): void {}
}
