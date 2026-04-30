import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesNavigation } from './machines-navigation';

describe('MachinesNavigation', () => {
  let component: MachinesNavigation;
  let fixture: ComponentFixture<MachinesNavigation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinesNavigation],
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesNavigation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
