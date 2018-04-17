import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeasceoneComponent } from './sizeasceone.component';

describe('SizeasceoneComponent', () => {
  let component: SizeasceoneComponent;
  let fixture: ComponentFixture<SizeasceoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeasceoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeasceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
