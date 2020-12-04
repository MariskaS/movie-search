import {TestBed} from '@angular/core/testing';

import {HelpService} from './help.service';

describe('HelpService', () => {
  let service: HelpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should coll debounced function only once', () => {
    const clock = jasmine.clock();
    clock.install();

    const func = jasmine.createSpy();
    const wait = 5000;
    const debouncedFn = service.debounce(func, wait);
    debouncedFn();
    debouncedFn();
    clock.tick(wait);
    expect(func.calls.all().length).toBe(1);
  });
});
