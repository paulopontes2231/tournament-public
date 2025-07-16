import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatch } from './update-match';

describe('UpdateMatch', () => {
  let component: UpdateMatch;
  let fixture: ComponentFixture<UpdateMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
