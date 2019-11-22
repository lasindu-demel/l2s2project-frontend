import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylandComponent } from './myland.component';

describe('MylandComponent', () => {
  let component: MylandComponent;
  let fixture: ComponentFixture<MylandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
