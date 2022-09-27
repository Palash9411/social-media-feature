import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { lazyChildRoutingModule } from './lazy-child.routing.module';



@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    lazyChildRoutingModule
  ]
})
export class LazyChildModule { }
