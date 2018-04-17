import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedesceoneComponent } from './datedesceone.component';

describe('DatedesceoneComponent', () => {
  let component: DatedesceoneComponent;
  let fixture: ComponentFixture<DatedesceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatedesceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedesceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
