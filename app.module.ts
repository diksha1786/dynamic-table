import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableaddComponent } from './tableadd/tableadd.component';
import { TabledynamicComponent } from './tabledynamic/tabledynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    TableaddComponent,
    TabledynamicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
