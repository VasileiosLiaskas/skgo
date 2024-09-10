import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Button} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarsComponent } from './cars/cars.component';
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Button,
    SidebarModule,
    PanelModule,
    TableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
