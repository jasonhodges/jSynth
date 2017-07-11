import {NgModule} from '@angular/core';
import {WidgetOneComponent} from './widget-one.component';
import {WidgetTwoComponent} from './widget-two.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports:[CommonModule],
  declarations: [
    WidgetOneComponent,
    WidgetTwoComponent],
  exports: [
    WidgetOneComponent,
    WidgetTwoComponent,
    CommonModule]
})

export class WidgetModule{}