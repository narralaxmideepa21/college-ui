import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Departmentdialog } from './departmentdialog';

describe('Departmentdialog', () => {
  let component: Departmentdialog;
  let fixture: ComponentFixture<Departmentdialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Departmentdialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Departmentdialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
