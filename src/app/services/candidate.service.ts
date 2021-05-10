import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  constructor(private http: HttpClient) {}

  private _filterBy$ = new BehaviorSubject({ term: 'UX Designer' });
  public filterBy$ = this._filterBy$.asObservable();

  private _sortBy$ = new BehaviorSubject({ term: 'Relevance' });
  public sortByy$ = this._sortBy$.asObservable();

  private _candidates$ = new BehaviorSubject([]);
  public candidates$ = this._candidates$.asObservable();

  private _jobs$ = new BehaviorSubject([]);
  public jobs$ = this._jobs$.asObservable();

  public getCandidates() {
    var candidates = this.load('candidatesDB');
    if (!candidates || !candidates.length) {
      this.http.get('assets/searchResults.json').subscribe((data) => {
        this.store('candidatesDB', data['candidates']);
        this.filterCandidates(data['candidates']);
      });
    } else {
      this.filterCandidates(candidates);
    }
  }

  private filterCandidates(candidates) {
    const filterBy = this._filterBy$.getValue();
    const filterCandidates = candidates.filter((candidate) =>
      candidate.currentCompany.jobTitle
        .toLowerCase()
        .includes(filterBy.term.toLowerCase())
    );
    this.sortCandidates(filterCandidates);
  }

  public setFilter(filterBy) {
    this._filterBy$.next({ term: filterBy });
    this.getCandidates();
  }

  public setSort(sortStr) {
    this._sortBy$.next({ term: sortStr });
    this.getCandidates();
  }

  public addToJob(candidate) {
    const candidates = this.load('candidatesDB');
    const idx = candidates.findIndex(
      ({ swoopProfileId }) => swoopProfileId === candidate.swoopProfileId
    );
    candidates.splice(idx, 1);
    this.store('candidatesDB', candidates);
    this.filterCandidates(candidates);
    this.updateJobs(candidate);
  }

  public loadJobs() {
    var jobs = this.load('jobsDB');
    if (!jobs || !jobs.length) {
      jobs = [];
      this.store('jobsDB', jobs);
    }
    this._jobs$.next(jobs);
  }

  private sortCandidates(candidates) {
    const sortStr = this._sortBy$.getValue();
    var sortCandidates;
    if (sortStr.term === 'Relevance') {
      sortCandidates = candidates;
    }
    if (sortStr.term === 'Name') {
      sortCandidates = candidates.sort((candidateA, candidateB) => {
        const nameA = candidateA.firstName.toLowerCase();
        const nameB = candidateB.firstName.toLowerCase();
        if (nameA > nameB) return 1;
        if (nameA < nameB) return -1;
        return 0;
      });
    }
    if (sortStr.term === 'Seniority') {
      sortCandidates = candidates.sort((candidateA, candidateB) => {
        const seniorityA = new Date(candidateA.currentCompany.startDate);
        const seniorityB = new Date(candidateB.currentCompany.startDate);
        return seniorityA.getTime() - seniorityB.getTime();
      });
    }
    this._candidates$.next(sortCandidates);
  }

  private updateJobs(candidate) {
    var jobs = this.load('jobsDB');
    jobs.push(candidate);
    this._jobs$.next(jobs);
    this.store('jobsDB', jobs);
  }

  private store(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  private load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
  }
}
