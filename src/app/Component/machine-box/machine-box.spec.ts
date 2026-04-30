import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineBox } from './machine-box';
import { MachineStatus } from '@models/Enum/MachineState';

describe('MachineBox', () => {
  let component: MachineBox;
  let fixture: ComponentFixture<MachineBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineBox],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineBox);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('name', 'Scale');
    fixture.componentRef.setInput('status', MachineStatus.Running);
    fixture.componentRef.setInput('icon', { name: 'scale', CssClass: 'material-icons' });

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});