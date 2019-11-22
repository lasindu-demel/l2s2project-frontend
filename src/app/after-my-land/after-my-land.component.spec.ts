import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterMyLandComponent } from './after-my-land.component';

describe('AfterMyLandComponent', () => {
  let component: AfterMyLandComponent;
  let fixture: ComponentFixture<AfterMyLandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterMyLandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterMyLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
