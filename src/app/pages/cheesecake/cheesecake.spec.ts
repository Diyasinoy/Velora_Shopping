import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cheesecake } from './cheesecake';

describe('Cheesecake', () => {
  let component: Cheesecake;
  let fixture: ComponentFixture<Cheesecake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cheesecake]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cheesecake);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
