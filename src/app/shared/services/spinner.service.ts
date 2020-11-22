import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  get showSpinner(): boolean {
    return this.counter > 0;
  }

  private counter = 0;

  show(): void {
    this.counter++;
  }

  hide(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
