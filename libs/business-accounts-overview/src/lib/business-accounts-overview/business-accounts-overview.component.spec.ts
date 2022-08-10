import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountsOverviewComponent } from './business-accounts-overview.component';

describe('BusinessAccountsOverviewComponent', () => {
  let component: BusinessAccountsOverviewComponent;
  let fixture: ComponentFixture<BusinessAccountsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessAccountsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BusinessAccountsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
