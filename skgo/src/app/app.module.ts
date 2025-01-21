import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Button, ButtonDirective} from "primeng/button";
import {SidebarModule} from "primeng/sidebar";
import { SidebarComponent } from './sidebar/sidebar.component';
import { CarsComponentList } from './cars/cars-component-list';
import {PanelModule} from "primeng/panel";
import {TableModule} from "primeng/table";
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Ripple} from "primeng/ripple";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from "primeng/inputtext";
import {CarsComponentView} from "./cars/cars-component-view";
import {ContextMenuModule} from "primeng/contextmenu";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CarsComponentList,
    HomeComponent,
    HeaderComponent,
    CarsComponentView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Button,
    SidebarModule,
    PanelModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonDirective,
    Ripple,
    FontAwesomeModule,
    InputTextModule,
    ContextMenuModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
