import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlButton } from './button';

describe('SlButton', () => {
  let component: SlButton;
  let fixture: ComponentFixture<SlButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlButton],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
