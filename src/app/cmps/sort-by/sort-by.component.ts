import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/services/candidate.service';
import {
  trigger,
  transition,
  animate,
  style,
  state,
} from '@angular/animations';

@Component({
  selector: 'sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  animations: [
    trigger('toggleAnimation', [
      state(
        'open',
        style({
          height: '128px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
        })
      ),
      transition('open => closed', [animate('0.25s')]),
      transition('closed => open', [animate('0.4s')]),
    ]),
  ],
})
export class SortByComponent implements OnInit {
  sortBy: String = 'Relevance';
  isSortOptShow = false;

  constructor(private candidateService: CandidateService) {}

  sort(value) {
    this.sortBy = value;
    this.isSortOptShow = false;
    this.candidateService.setSort(value);
  }

  ngOnInit(): void {}
}
