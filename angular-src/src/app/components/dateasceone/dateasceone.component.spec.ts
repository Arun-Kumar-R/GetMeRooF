import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateasceoneComponent } from './dateasceone.component';

describe('DateasceoneComponent', () => {
  let component: DateasceoneComponent;
  let fixture: ComponentFixture<DateasceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateasceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateasceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
