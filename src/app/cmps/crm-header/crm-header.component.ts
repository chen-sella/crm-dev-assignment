import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'crm-header',
  templateUrl: './crm-header.component.html',
  styleUrls: ['./crm-header.component.scss'],
})
export class CrmHeaderComponent implements OnInit {
  @Input() resultsNum;
  @Input() jobsNum;
  @Input() filter;

  isShowMenu: boolean = false;

  subscription: Subscription;

  constructor() {}

  ngOnInit(): void {}
}
