import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesShell } from './machines-shell';

describe('MachinesShell', () => {
  let component: MachinesShell;
  let fixture: ComponentFixture<MachinesShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinesShell],
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
