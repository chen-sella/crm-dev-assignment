import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Alert } from 'src/app/models/alert';
import { AlertService } from 'src/app/services/alert.service';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  animations: [
    trigger('enterLeaveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class AlertComponent implements OnInit {
  alert: Alert;
  alertSubscription: Subscription;

  constructor(private alertService: AlertService) {}

  removeAlert() {
    this.alert = null;
  }

  ngOnInit(): void {
    this.alertSubscription = this.alertService.onAlert().subscribe((alert) => {
      this.alert = alert;
      setTimeout(() => this.removeAlert(), 3000);
    });
  }
  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
