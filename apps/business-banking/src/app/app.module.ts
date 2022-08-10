import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BusinessAccountsOverviewModule } from '@banking/business-accounts-overview';
import { SharedModule } from '@banking/shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BusinessAccountsOverviewModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
