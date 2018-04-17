import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistasceoneComponent } from './distasceone.component';

describe('DistasceoneComponent', () => {
  let component: DistasceoneComponent;
  let fixture: ComponentFixture<DistasceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistasceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistasceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
