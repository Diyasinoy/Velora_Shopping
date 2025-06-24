import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Choco } from './choco';

describe('Choco', () => {
  let component: Choco;
  let fixture: ComponentFixture<Choco>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Choco]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Choco);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
