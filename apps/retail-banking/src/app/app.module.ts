import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RetailAccountsOverviewComponent } from '@banking/retail-accounts-overview';
import { HeadingComponent } from '@banking/shared';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, RetailAccountsOverviewComponent, HeadingComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
