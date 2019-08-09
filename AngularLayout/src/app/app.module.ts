import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BTVNModule } from './btvn/btvn.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BTVNModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
