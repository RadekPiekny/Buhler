import { describe, it, expect, vi, beforeEach } from 'vitest';

import { Loading } from './loading';

describe('LoadingService', () => {
  let service: Loading;

  beforeEach(() => {
    vi.useFakeTimers();
    service = new Loading();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('on()', () => {
    it('sets loading to true when request starts', () => {
      service.on(1);
      expect(service.loading()).toBe(true);
    });

    it('stays true when multiple requests are active', () => {
      service.on(1);
      service.on(2);
      service.off(1);
      expect(service.loading()).toBe(true);
    });
  });

  describe('off()', () => {
    it('keeps loading true before 300ms minimum has passed', () => {
      service.on(1);
      service.off(1);

      vi.advanceTimersByTime(299);
      expect(service.loading()).toBe(true);
    });

    it('sets loading to false after 300ms minimum', () => {
      service.on(1);
      service.off(1);

      vi.advanceTimersByTime(300);
      expect(service.loading()).toBe(false);
    });

    it('resets the 300ms timer when new request arrives during window', () => {
      service.on(1);
      service.off(1);

      vi.advanceTimersByTime(200); // within the 300ms window
      service.on(2);               // new request resets timer
      service.off(2);

      vi.advanceTimersByTime(299); // 299ms after request 2 ended
      expect(service.loading()).toBe(true);

      vi.advanceTimersByTime(1);   // now 300ms after request 2
      expect(service.loading()).toBe(false);
    });

    it('does not hide loading while other requests are still active', () => {
      service.on(1);
      service.on(2);
      service.off(1);

      vi.advanceTimersByTime(1000);
      expect(service.loading()).toBe(true);

      service.off(2);
      vi.advanceTimersByTime(300);
      expect(service.loading()).toBe(false);
    });
  });
});