import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatedescallComponent } from './datedescall.component';

describe('DatedescallComponent', () => {
  let component: DatedescallComponent;
  let fixture: ComponentFixture<DatedescallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatedescallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatedescallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
