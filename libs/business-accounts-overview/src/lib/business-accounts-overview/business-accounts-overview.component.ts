import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banking-business-accounts-overview',
  template: ` <p>business-accounts-overview works!</p> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessAccountsOverviewComponent {
}
