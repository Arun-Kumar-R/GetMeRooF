import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedescallComponent } from './sizedescall.component';

describe('SizedescallComponent', () => {
  let component: SizedescallComponent;
  let fixture: ComponentFixture<SizedescallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizedescallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedescallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
