import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpImportComponent } from './wp-import.component';

describe('WpImportComponent', () => {
  let component: WpImportComponent;
  let fixture: ComponentFixture<WpImportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpImportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
