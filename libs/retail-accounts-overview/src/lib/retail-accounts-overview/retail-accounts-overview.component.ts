import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banking-retail-accounts-overview',
  template: ` <p>retail-accounts-overview works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetailAccountsOverviewComponent {
  testing = 123;
}
