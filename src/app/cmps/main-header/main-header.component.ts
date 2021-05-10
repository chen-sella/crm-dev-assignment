import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit {
  isShowMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
