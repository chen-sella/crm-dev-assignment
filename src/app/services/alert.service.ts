import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert } from '../models/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {}

  private subject = new Subject<Alert>();

  public onAlert(): Observable<Alert> {
    return this.subject.asObservable();
  }

  addToJob(message: string) {
    this.alert({ message });
  }

  alert(alert) {
    this.subject.next(alert);
  }
}
