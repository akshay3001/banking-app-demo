import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'banking-heading',
  template: ` <h1>Banking App</h1> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeadingComponent {
  constructor() {
    console.log('Heading Component log');
  }
}
