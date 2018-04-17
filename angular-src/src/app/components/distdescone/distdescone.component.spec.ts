import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistdesconeComponent } from './distdescone.component';

describe('DistdesconeComponent', () => {
  let component: DistdesconeComponent;
  let fixture: ComponentFixture<DistdesconeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistdesconeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistdesconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
