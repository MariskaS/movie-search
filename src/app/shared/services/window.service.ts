import {InjectionToken} from '@angular/core';

export const WINDOW = new InjectionToken('Window');

export function windowProvider(): Window {
  return window;
}
