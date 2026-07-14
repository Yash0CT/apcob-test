import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeSideNav } from './welcome-side-nav';

describe('WelcomeSideNav', () => {
  let component: WelcomeSideNav;
  let fixture: ComponentFixture<WelcomeSideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomeSideNav],
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomeSideNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
