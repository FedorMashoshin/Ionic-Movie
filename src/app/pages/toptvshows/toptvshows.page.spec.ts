import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToptvshowsPage } from './toptvshows.page';

describe('ToptvshowsPage', () => {
  let component: ToptvshowsPage;
  let fixture: ComponentFixture<ToptvshowsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToptvshowsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToptvshowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
