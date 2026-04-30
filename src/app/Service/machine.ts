import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IMachine } from '@models/Interface/machine';
import { BehaviorSubject, merge, Observable, shareReplay, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Machine {
  private http = inject(HttpClient);
  
  // I assume we dont have some kind of websocket connection to get real time updates, so we poll the api every 10 seconds even tho
  // this is not the most efficient way to do it and might put too much load on the server, but for the sake of this exercise it should be fine.
  // I also assume that operator does not want to push refresh button but if we have some web for pc/tablet etc i added it.
  // also generally i would have some generated api folder and separet service for this but again for the sake of this exercise i will just put it here.
  private refresh$ = new BehaviorSubject<void>(undefined);

  machines$: Observable<IMachine[]> = merge(
    timer(0, 10000),
    this.refresh$
  ).pipe(
    switchMap(() => this.http.get<IMachine[]>('machineApiLink')),
    shareReplay(1)
  );

  refresh() {
    this.refresh$.next();
  }
}
