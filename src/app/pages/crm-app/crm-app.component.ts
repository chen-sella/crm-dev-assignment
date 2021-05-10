import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'crm-app',
  templateUrl: './crm-app.component.html',
  styleUrls: ['./crm-app.component.scss'],
})
export class CRMAppComponent implements OnInit {
  cnadidates: Array<object>;
  filter: object;
  jobs: Array<object>;
  candidateSubscription: Subscription;
  filterSubscription: Subscription;
  jobsSubscription: Subscription;
  isSeeMore: boolean = false;

  constructor(private candidateService: CandidateService) {}

  cnadidatesToRender() {
    return this.isSeeMore ? this.cnadidates : this.cnadidates.slice(0, 3);
  }

  addToJob(candidate) {
    this.candidateService.addToJob(candidate);
  }

  ngOnInit(): void {
    this.candidateService.getCandidates();
    this.candidateService.loadJobs();
    this.candidateSubscription = this.candidateService.candidates$.subscribe(
      (candidates) => (this.cnadidates = candidates)
    );
    this.filterSubscription = this.candidateService.filterBy$.subscribe(
      (filterBy) => (this.filter = filterBy)
    );
    this.jobsSubscription = this.candidateService.jobs$.subscribe(
      (jobs) => (this.jobs = jobs)
    );
  }

  ngOnDestroy() {
    this.candidateSubscription.unsubscribe();
    this.filterSubscription.unsubscribe();
    this.jobsSubscription.unsubscribe();
  }
}
