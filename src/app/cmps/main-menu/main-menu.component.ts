import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  icons: Array<string> = [
    'Jobs',
    'Projects',
    'Candidates',
    'Employees',
    'Lists',
    'Campaigns',
    'Inbox',
    'Events',
    'Talent comm',
    'Privacy',
  ];

  isShowMenu: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
