import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopactorsPage } from './topactors.page';

describe('TopactorsPage', () => {
  let component: TopactorsPage;
  let fixture: ComponentFixture<TopactorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopactorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopactorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
