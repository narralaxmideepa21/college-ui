import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logincms } from './logincms';

describe('Logincms', () => {
  let component: Logincms;
  let fixture: ComponentFixture<Logincms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Logincms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logincms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
