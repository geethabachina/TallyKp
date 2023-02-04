import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpApproveComponent } from './wp-approve.component';

describe('WpApproveComponent', () => {
  let component: WpApproveComponent;
  let fixture: ComponentFixture<WpApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WpApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WpApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
