import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarsComponentList} from "./cars/cars-component-list";
import {HomeComponent} from "./home/home.component";
import {CarsComponentView} from "./cars/cars-component-view";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cars',
    children: [
      {
        path: 'list',
        component: CarsComponentList,
      },
      {
        path: 'view',
        component: CarsComponentView,
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
