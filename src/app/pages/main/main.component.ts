import { Component, OnInit } from '@angular/core';
import { MainViewModel } from 'src/app/view-models/main.view-model';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(public mainViewModel: MainViewModel) {}
}
