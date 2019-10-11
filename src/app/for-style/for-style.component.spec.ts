import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForStyleComponent } from './for-style.component';

describe('ForStyleComponent', () => {
  let component: ForStyleComponent;
  let fixture: ComponentFixture<ForStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
