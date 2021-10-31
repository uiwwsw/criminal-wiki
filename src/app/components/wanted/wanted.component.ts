import { Component, Input, OnInit } from '@angular/core';
import { Criminal } from 'src/app/models/criminal.model';

@Component({
  selector: 'app-wanted',
  templateUrl: './wanted.component.html',
  styleUrls: ['./wanted.component.scss'],
})
export class WantedComponent implements OnInit {
  @Input() criminal!: Criminal;
  constructor() {}
  get isAlt() {
    return this.criminal.name || $localize`이름 모를 범죄자의 이미지`;
  }
  get isName() {
    return this.criminal.name || $localize`아무개`;
  }

  get isSrc() {
    return this.criminal.src || 'assets/images/components/wanted/no-img.png';
  }

  ngOnInit(): void {}
}
