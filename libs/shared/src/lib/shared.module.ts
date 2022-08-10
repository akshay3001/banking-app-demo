import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeadingComponent],
  exports: [HeadingComponent]
})
export class SharedModule {}
