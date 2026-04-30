import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinesOverview } from './machines-overview';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MachinesOverview', () => {
  let component: MachinesOverview;
  let fixture: ComponentFixture<MachinesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinesOverview],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});