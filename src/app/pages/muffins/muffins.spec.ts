import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Muffins } from './muffins';

describe('Muffins', () => {
  let component: Muffins;
  let fixture: ComponentFixture<Muffins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Muffins]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Muffins);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
