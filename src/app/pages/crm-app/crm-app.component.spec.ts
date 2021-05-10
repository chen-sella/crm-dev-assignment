import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMAppComponent } from './crm-app.component';

describe('CRMAppComponent', () => {
  let component: CRMAppComponent;
  let fixture: ComponentFixture<CRMAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRMAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
