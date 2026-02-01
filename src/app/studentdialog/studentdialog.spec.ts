import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentdialog } from './studentdialog';

describe('Studentdialog', () => {
  let component: Studentdialog;
  let fixture: ComponentFixture<Studentdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentdialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
