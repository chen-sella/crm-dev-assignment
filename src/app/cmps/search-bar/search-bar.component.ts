import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  searchField: FormControl;

  constructor(private candidateService: CandidateService) {}

  ngOnInit(): void {
    this.searchField = new FormControl('UX Designer');
    this.searchField.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((value) => this.candidateService.setFilter(value));
  }
}
