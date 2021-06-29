import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlProgressBar } from './progress-bar';

describe('ProgressBar', () => {
  let component: SlProgressBar;
  let fixture: ComponentFixture<SlProgressBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlProgressBar],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlProgressBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
