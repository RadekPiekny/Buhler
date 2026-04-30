import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loading {
  private minDuration = 300;
  private activeRequests = new Map<number, number>(); // id -> startTime
  private hideTimer: ReturnType<typeof setTimeout> | null = null;

  loading = signal(false);

  on(id: number) {
    if (this.hideTimer) {
      clearTimeout(this.hideTimer);
      this.hideTimer = null;
    }

    this.activeRequests.set(id, Date.now());
    this.loading.set(true);
  }

  off(id: number) {
    const startTime = this.activeRequests.get(id) ?? Date.now();
    this.activeRequests.delete(id);

    if (this.activeRequests.size > 0) return;

    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, this.minDuration - elapsed);

    this.hideTimer = setTimeout(() => {
      if (this.activeRequests.size === 0) {
        this.loading.set(false);
      }
      this.hideTimer = null;
    }, remaining);
  }
}
