import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursesdialog } from './coursesdialog';

describe('Coursesdialog', () => {
  let component: Coursesdialog;
  let fixture: ComponentFixture<Coursesdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Coursesdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Coursesdialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
