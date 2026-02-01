import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Facultydialog } from './facultydialog';

describe('Facultydialog', () => {
  let component: Facultydialog;
  let fixture: ComponentFixture<Facultydialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Facultydialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Facultydialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
