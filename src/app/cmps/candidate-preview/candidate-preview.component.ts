import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'candidate-preview',
  templateUrl: './candidate-preview.component.html',
  styleUrls: ['./candidate-preview.component.scss'],
})
export class CandidatePreviewComponent implements OnInit {
  @Input() candidate;
  @Input() filter;
  @Output() job = new EventEmitter<object>();

  date: String;
  fullName: String;

  constructor(protected alertService: AlertService) {}

  addToJob(candidate) {
    this.job.emit(candidate);
    this.alertService.addToJob(
      `${this.fullName} was added to job ${
        this.filter.term ? this.filter.term : 'list'
      }`
    );
  }

  highlightJob() {
    if (!this.filter.term) return this.candidate.currentCompany.title;
    return this.candidate.currentCompany.title.replace(
      new RegExp(this.filter.term, 'i'),
      (match) => {
        return '<span class="highlight">' + match + '</span>';
      }
    );
  }

  ngOnInit(): void {
    this.date = moment(this.candidate.currentCompany.startDate).toNow(true);
    this.fullName = this.candidate.firstName + ' ' + this.candidate.lastName;
  }
}
