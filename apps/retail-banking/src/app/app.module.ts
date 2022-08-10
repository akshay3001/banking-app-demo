import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RetailAccountsOverviewModule } from '@banking/retail-accounts-overview';
import { SharedModule } from '@banking/shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RetailAccountsOverviewModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
