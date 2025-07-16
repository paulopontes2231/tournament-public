import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTile } from './match-tile';

describe('MatchTile', () => {
  let component: MatchTile;
  let fixture: ComponentFixture<MatchTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchTile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
