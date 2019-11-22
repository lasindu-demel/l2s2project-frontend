import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHarvestComponent } from './view-harvest.component';

describe('ViewHarvestComponent', () => {
  let component: ViewHarvestComponent;
  let fixture: ComponentFixture<ViewHarvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHarvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHarvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
