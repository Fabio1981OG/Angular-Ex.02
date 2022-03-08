import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { InputButtonComponent } from './input-button/input-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputSubmitComponent } from './input-submit/input-submit.component';

@NgModule({
  declarations: [
    AppComponent,
  
    InputButtonComponent,
    InputTextComponent,
    InputNumberComponent,
    InputSubmitComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
