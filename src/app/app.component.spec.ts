import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {provideMockStore} from '@ngrx/store/testing';
import {WINDOW} from './shared/services/window.service';
import {IconRegistryService} from './shared/services/icon-registry.service';
import {Store} from '@ngrx/store';
import {selectSideNavOpen} from './data-flow/selectors/applicationStatus.selector';
import {CloseSideNav, OpenSideNav} from './data-flow/actions/sidenav.actions';

describe('AppComponent', () => {
  let mockWindow;
  let app;
  let mockDispatch;
  let fixture;

  function initTestModule(innerWidth: number): void {
    mockWindow = {innerWidth};

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [
        provideMockStore({
          selectors: [
            {selector: selectSideNavOpen, value: true}
          ]
        }),
        {
          provide: WINDOW,
          useValue: mockWindow
        },
        {
          provide: IconRegistryService,
          useValue: jasmine.createSpyObj(IconRegistryService, ['init'])
        }
      ]
    });

    const mockStore = TestBed.inject(Store);

    mockDispatch = spyOn(mockStore, 'dispatch');
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  }

  describe('Large screen', () => {

    beforeEach(() => {
      initTestModule(1000);
    });

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it('should open side navigation when init', () => {
      expect(mockDispatch).toHaveBeenCalledWith(
        jasmine.objectContaining({type: OpenSideNav.type})
      );
    });

    it('should open side navigation when window resized', () => {
      app.handleResize();
      expect(mockDispatch).toHaveBeenCalledWith(
        jasmine.objectContaining({type: OpenSideNav.type})
      );
    });

    it('should close side navigation when window resized from large to small', () => {
      app.previousWidth = 700;
      app.window.innerWidth = 500;
      app.handleResize();
      expect(mockDispatch).toHaveBeenCalledWith(
        jasmine.objectContaining({type: CloseSideNav.type})
      );
    });

    it('should open side navigation when window resized from small to large', () => {
      app.previousWidth = 500;
      app.window.innerWidth = 700;
      app.handleResize();
      expect(mockDispatch).toHaveBeenCalledWith(
        jasmine.objectContaining({type: OpenSideNav.type})
      );
    });
  });

  describe('Small screen', () => {
    beforeEach(() => {
      initTestModule(500);
    });

    it('should close side navigation when init', () => {
      expect(mockDispatch).toHaveBeenCalledWith(
        jasmine.objectContaining({type: CloseSideNav.type})
      );
    });
  });
});
