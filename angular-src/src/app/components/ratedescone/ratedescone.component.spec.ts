import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedesconeComponent } from './ratedescone.component';

describe('RatedesconeComponent', () => {
  let component: RatedesconeComponent;
  let fixture: ComponentFixture<RatedesconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedesconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedesconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
