import { AsyncPipe, DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingBar } from '@components/loading-bar/loading-bar';
import { Loading } from '@services/loading';
import { User } from '@services/user';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DatePipe,
    AsyncPipe,
    LoadingBar
  ],
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('Buhler');
  timeNow = signal(new Date());
  userService = inject(User);
  loadingService = inject(Loading);

  user$ = this.userService.user$;
  loading = this.loadingService.loading;
}
