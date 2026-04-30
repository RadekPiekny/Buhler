import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { randomInt } from '@functions/random';
import { MachineStatus } from '@models/Enum/MachineState';
import { of, delay } from 'rxjs';
import { MOCK_MACHINES, MOCK_USERS } from '../FakeData/fake-data';

const randomUser = () => MOCK_USERS[randomInt(0, MOCK_USERS.length - 1)];

export const mockInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url === 'userApiLink') {
    return of(new HttpResponse({ status: 200, body: randomUser() }))
      .pipe(delay(randomInt(1800, 3500)));
  }
  if (req.url === 'machineApiLink') {
    const STATUSES = Object.values(MachineStatus);
    const randomStatus = (): MachineStatus => STATUSES[randomInt(0, STATUSES.length - 1)];
    const machinesWithRandomStatus = MOCK_MACHINES.map(m => ({ ...m, status: randomStatus() }));
    return of(new HttpResponse({ status: 200, body: machinesWithRandomStatus }))
      .pipe(delay(randomInt(1800, 3500)));
  }

  return next(req);
};