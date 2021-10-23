import { Component, HostListener, OnInit } from '@angular/core';
import { MediaQueryService } from './services/media-query.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;
  title = 'criminal-wiki';
  options = [
    { value: '1', key: '1' },
    { value: '2', key: '2' },
    { value: '3', key: '3' },
  ];
  value = '2';
  constructor(private mediaQueryService: MediaQueryService) {}
  @HostListener('window:resize')
  onResize() {
    this.mediaQueryService.onResize(globalThis.innerWidth);
  }
  ngOnInit() {
    this.onResize();
    this.loading = true;
  }
}
