import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateasceoneComponent } from './rateasceone.component';

describe('RateasceoneComponent', () => {
  let component: RateasceoneComponent;
  let fixture: ComponentFixture<RateasceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateasceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateasceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
