import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SocialfpReportService } from './services/socialfp-report.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppDesignModule } from './app-design.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppDesignModule
  ],
  providers: [
    SocialfpReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
