import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedescallComponent } from './ratedescall.component';

describe('RatedescallComponent', () => {
  let component: RatedescallComponent;
  let fixture: ComponentFixture<RatedescallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedescallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedescallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
