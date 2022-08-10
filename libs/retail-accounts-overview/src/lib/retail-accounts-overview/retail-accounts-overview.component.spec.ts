import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailAccountsOverviewComponent } from './retail-accounts-overview.component';

describe('RetailAccountsOverviewComponent', () => {
  let component: RetailAccountsOverviewComponent;
  let fixture: ComponentFixture<RetailAccountsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetailAccountsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetailAccountsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
