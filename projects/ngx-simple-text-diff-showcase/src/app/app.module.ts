import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxSimpleTextDiffModule} from '../../../ngx-simple-text-diff/src/lib/ngx-simple-text-diff.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgxSimpleTextDiffModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
