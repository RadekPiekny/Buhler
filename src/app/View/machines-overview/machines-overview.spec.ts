import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesOverview } from './machines-overview';

describe('MachinesOverview', () => {
  let component: MachinesOverview;
  let fixture: ComponentFixture<MachinesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinesOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
