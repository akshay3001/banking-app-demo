import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessAccountsOverviewComponent } from './business-accounts-overview/business-accounts-overview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BusinessAccountsOverviewComponent],
  exports: [BusinessAccountsOverviewComponent],
})
export class BusinessAccountsOverviewModule {}
