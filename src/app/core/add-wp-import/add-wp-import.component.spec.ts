import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWpImportComponent } from './add-wp-import.component';

describe('AddWpImportComponent', () => {
  let component: AddWpImportComponent;
  let fixture: ComponentFixture<AddWpImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWpImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWpImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
