import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterProcessBidComponent } from './after-process-bid.component';

describe('AfterProcessBidComponent', () => {
  let component: AfterProcessBidComponent;
  let fixture: ComponentFixture<AfterProcessBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterProcessBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterProcessBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
