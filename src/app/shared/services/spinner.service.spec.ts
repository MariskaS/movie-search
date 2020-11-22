import {TestBed} from '@angular/core/testing';

import {SpinnerService} from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show spinner when call show method', () => {
    service.show();
    expect(service.showSpinner).toBeTrue();

    service.show();
    service.hide();
    expect(service.showSpinner).toBeTrue();
  });

  it('should hide spinner when call show method', () => {
    service.hide();
    expect(service.showSpinner).toBeFalse();
  });
});
