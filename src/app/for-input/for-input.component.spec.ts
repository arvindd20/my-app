import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForInputComponent } from './for-input.component';

describe('ForInputComponent', () => {
  let component: ForInputComponent;
  let fixture: ComponentFixture<ForInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
