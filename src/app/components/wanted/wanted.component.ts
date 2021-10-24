import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wanted',
  templateUrl: './wanted.component.html',
  styleUrls: ['./wanted.component.scss'],
})
export class WantedComponent implements OnInit {
  @Input() src?: string;
  @Input() name?: string;
  @Input() infomations: string[] = [];
  constructor() {}
  get isAlt() {
    return (
      this.name ||
      this.infomations[0] ||
      $localize`정보가 존재하지 않는 범죄자의 이미지`
    );
  }

  ngOnInit(): void {}
}
