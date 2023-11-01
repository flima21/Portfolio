import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TachometerChartComponent } from './tachometer-chart/tachometer-chart.component';
import { ChartModule } from 'angular-highcharts';
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TachometerChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
