import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsHomePageComponent } from './publications-home-page.component';

describe('PublicationsHomePageComponent', () => {
  let component: PublicationsHomePageComponent;
  let fixture: ComponentFixture<PublicationsHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationsHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
