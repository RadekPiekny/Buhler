import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineNavBtn } from './machine-nav-btn';

describe('MachineNavBtn', () => {
  let component: MachineNavBtn;
  let fixture: ComponentFixture<MachineNavBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineNavBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineNavBtn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
