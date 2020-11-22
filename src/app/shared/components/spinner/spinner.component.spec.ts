import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerComponent} from './spinner.component';
import {SpinnerService} from '../../services/spinner.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      imports: [MatProgressSpinnerModule],
      providers: [
        {
          provide: SpinnerService,
          useValue: {showSpinner: true}
        }
      ]
    });

    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
