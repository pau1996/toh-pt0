import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComarcasModule } from './comarcas/comarcas.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import * as Chart from 'chart.js';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ComarcasModule,
    HttpClientModule,
    FlexLayoutModule,
    MatCardModule,
    AppRoutingModule,
  ],
  exports: [MatCardModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
