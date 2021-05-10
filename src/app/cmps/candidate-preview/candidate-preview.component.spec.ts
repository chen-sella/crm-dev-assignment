import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePreviewComponent } from './candidate-preview.component';

describe('CandidatePreviewComponent', () => {
  let component: CandidatePreviewComponent;
  let fixture: ComponentFixture<CandidatePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
