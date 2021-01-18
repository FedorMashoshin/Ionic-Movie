import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActorPage } from './actor.page';

describe('ActorPage', () => {
  let component: ActorPage;
  let fixture: ComponentFixture<ActorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
