import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
})
export class CandidateListComponent implements OnInit {
  @Input() candidates;
  @Input() filter;
  @Output() job = new EventEmitter<object>();

  addToJob(candidate) {
    this.job.emit(candidate);
  }

  constructor() {}

  ngOnInit(): void {}
}
