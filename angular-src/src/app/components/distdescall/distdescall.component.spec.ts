import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistdescallComponent } from './distdescall.component';

describe('DistdescallComponent', () => {
  let component: DistdescallComponent;
  let fixture: ComponentFixture<DistdescallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistdescallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistdescallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
