import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  debounce(func, wait): (...args) => void {
    let timeout;

    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

}
