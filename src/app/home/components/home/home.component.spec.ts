import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {SpinnerService} from '../../../shared/services/spinner.service';
import {selectMovieList} from '../../../data-flow/selectors/movie-list.selector';
import {selectDetail} from '../../data-flow/selectors/movie-detail.selector';
import {selectErrorStatus, selectLoadingState} from '../../data-flow/selectors/home-page.selector';
import {Store} from '@ngrx/store';
import {LoadMovieDetail} from '../../data-flow/actions/movie-detail.actions';
import * as fromRoot from '../../data-flow';
import {MovieDetail} from '../../../core/interfaces';
import {MovieDialogComponent} from '../movie-dialog/movie-dialog.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spinnerService: SpinnerService;
  let mockStore: MockStore<fromRoot.State>;
  let mockDispatch;
  let mockSelectDetail;
  let mockSelectErrorStatus;
  let mockSelectLoadingState;
  let matSnackBar;
  let matDialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        provideMockStore({
          selectors: [
            {selector: selectMovieList, value: []},
          ]
        }),
        {
          provide: SpinnerService,
          useValue: jasmine.createSpyObj(SpinnerService, ['show', 'hide'])
        },
        {
          provide: MatSnackBar,
          useValue: jasmine.createSpyObj(MatSnackBar, ['open'])
        },
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj(MatDialog, ['open'])
        }
      ]
    });

    mockStore = TestBed.inject(Store) as MockStore<fromRoot.State>;
    mockSelectDetail = mockStore.overrideSelector(selectDetail, null);
    mockSelectErrorStatus = mockStore.overrideSelector(selectErrorStatus, null);
    mockSelectLoadingState = mockStore.overrideSelector(selectLoadingState, false);
    mockDispatch = spyOn(mockStore, 'dispatch');
    spinnerService = TestBed.inject(SpinnerService);
    matSnackBar = TestBed.inject(MatSnackBar);
    matDialog = TestBed.inject(MatDialog);

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog when a card is clicked', () => {
    const id = '1';
    component.clickCard(id);
    expect(mockDispatch).toHaveBeenCalledWith(
      jasmine.objectContaining(LoadMovieDetail({id}))
    );
  });

  it('should show spinner when loading state is true', () => {
    mockSelectLoadingState.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    expect(spinnerService.show).toHaveBeenCalled();
  });

  it('should hide spinner when loading state is false', () => {
    mockSelectLoadingState.setResult(false);
    mockStore.refreshState();
    fixture.detectChanges();
    expect(spinnerService.hide).toHaveBeenCalled();
  });

  it('should show snackBar when error status is filled', () => {
    mockSelectErrorStatus.setResult(new Error());
    mockStore.refreshState();
    fixture.detectChanges();
    expect(matSnackBar.open).toHaveBeenCalled();
  });

  it('should not show snackBar when error status is not filled', () => {
    mockSelectErrorStatus.setResult(null);
    mockStore.refreshState();
    fixture.detectChanges();
    expect(matSnackBar.open).not.toHaveBeenCalled();
  });

  it('should not show snackBar when error status is not filled', () => {
    mockSelectDetail.setResult(true);
    mockStore.refreshState();
    fixture.detectChanges();
    expect(spinnerService.show).not.toHaveBeenCalled();
  });

  it('should show dialog when it has detail', () => {
    const data = {
      id: 'string',
      title: 'string',
      year: 'any',
      imgUrl: 'string',
    } as MovieDetail;
    mockSelectDetail.setResult(data);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(matDialog.open).toHaveBeenCalledWith(
      MovieDialogComponent,
      jasmine.objectContaining({data})
    );
  });

  it('should not show dialog when it does not have detail', () => {
    mockSelectDetail.setResult(null);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(matDialog.open).not.toHaveBeenCalled();
  });
});
