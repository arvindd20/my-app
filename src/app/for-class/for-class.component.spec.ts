import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForClassComponent } from './for-class.component';

describe('ForClassComponent', () => {
  let component: ForClassComponent;
  let fixture: ComponentFixture<ForClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
