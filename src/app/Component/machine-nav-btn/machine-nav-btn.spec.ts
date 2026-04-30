import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineNavBtn } from './machine-nav-btn';
import { MachineStatus } from '@models/Enum/MachineState';

describe('MachineNavBtn', () => {
  let component: MachineNavBtn;
  let fixture: ComponentFixture<MachineNavBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineNavBtn],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineNavBtn);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('name', 'Scale');
    fixture.componentRef.setInput('status', MachineStatus.Running);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});