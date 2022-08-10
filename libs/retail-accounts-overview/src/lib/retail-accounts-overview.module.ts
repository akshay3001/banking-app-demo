import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetailAccountsOverviewComponent } from './retail-accounts-overview/retail-accounts-overview.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RetailAccountsOverviewComponent],
  exports: [RetailAccountsOverviewComponent],
})
export class RetailAccountsOverviewModule {}
