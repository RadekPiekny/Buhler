import { Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-bar',
  imports: [],
  templateUrl: './loading-bar.html',
})
export class LoadingBar {
  readonly loading = input<boolean>(true);
}
