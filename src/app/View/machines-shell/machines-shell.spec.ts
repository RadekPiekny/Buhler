import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MachinesShell } from './machines-shell';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';


describe('MachinesShell', () => {
  let component: MachinesShell;
  let fixture: ComponentFixture<MachinesShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MachinesShell],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MachinesShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});