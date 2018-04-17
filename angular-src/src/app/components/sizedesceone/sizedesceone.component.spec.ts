import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizedesceoneComponent } from './sizedesceone.component';

describe('SizedesceoneComponent', () => {
  let component: SizedesceoneComponent;
  let fixture: ComponentFixture<SizedesceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizedesceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizedesceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
