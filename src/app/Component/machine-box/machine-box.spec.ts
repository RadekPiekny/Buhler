import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineBox } from './machine-box';

describe('MachineBox', () => {
  let component: MachineBox;
  let fixture: ComponentFixture<MachineBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachineBox],
    }).compileComponents();

    fixture = TestBed.createComponent(MachineBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
