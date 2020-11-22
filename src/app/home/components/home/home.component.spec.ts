import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {provideMockStore} from '@ngrx/store/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {SpinnerService} from '../../../shared/services/spinner.service';
import {selectList} from '../../data-flow/selectors/movie.selector';
import {selectDetail} from '../../data-flow/selectors/movie-detail.selector';
import {selectErrorStatus, selectLoadingState} from '../../data-flow/selectors/home-page.selector';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule, MatDialogModule],
      declarations: [HomeComponent],
      providers: [
        provideMockStore({
          selectors: [
            {selector: selectList, value: []},
            {selector: selectDetail, value: null},
            {selector: selectErrorStatus, value: null},
            {selector: selectLoadingState, value: false},
          ]
        }),
        {
          provide: SpinnerService,
          useValue: jasmine.createSpyObj(SpinnerService, ['show', 'hide'])
        }
      ]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
