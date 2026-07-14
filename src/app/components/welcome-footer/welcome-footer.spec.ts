import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeFooter } from './welcome-footer';

describe('WelcomeFooter', () => {
  let component: WelcomeFooter;
  let fixture: ComponentFixture<WelcomeFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeFooter],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
