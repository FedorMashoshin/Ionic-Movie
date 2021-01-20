import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopmoviesPage } from './topmovies.page';

describe('TopmoviesPage', () => {
  let component: TopmoviesPage;
  let fixture: ComponentFixture<TopmoviesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopmoviesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopmoviesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
