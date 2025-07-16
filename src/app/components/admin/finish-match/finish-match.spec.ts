import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishMatch } from './finish-match';

describe('FinishMatch', () => {
  let component: FinishMatch;
  let fixture: ComponentFixture<FinishMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishMatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
