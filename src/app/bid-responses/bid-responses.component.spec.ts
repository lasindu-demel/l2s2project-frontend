import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidResponsesComponent } from './bid-responses.component';

describe('BidResponsesComponent', () => {
  let component: BidResponsesComponent;
  let fixture: ComponentFixture<BidResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
