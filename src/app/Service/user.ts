import { inject, Injectable } from '@angular/core';
import { randomInt } from '@functions/random';
import { IUser } from '@models/Interface/user';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class User {
  private http = inject(HttpClient);
  
  // I leave this this simple now. In real app it usually would be better to store the user in some behavsubject etc.
  user$: Observable<IUser> = this.http.get<IUser>(`userApiLink`);

}
