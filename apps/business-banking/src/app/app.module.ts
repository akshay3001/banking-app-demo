import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BusinessAccountsOverviewComponent } from '@banking/business-accounts-overview';
import { HeadingComponent } from '@banking/shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, HeadingComponent, BusinessAccountsOverviewComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
