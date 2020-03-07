import { NgModule } from '@angular/core';
import { NgxSimpleTextDiffComponent } from './ngx-simple-text-diff.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [NgxSimpleTextDiffComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxSimpleTextDiffComponent]
})
export class NgxSimpleTextDiffModule { }
