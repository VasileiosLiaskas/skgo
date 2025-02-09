import {Component, OnInit} from '@angular/core';

import {CarsService} from "./cars.service";
import {MenuItem} from "primeng/api";
import {FormGroup} from "@angular/forms";
import {TableContextMenuSelectEvent} from "primeng/table";
import {Car} from "./Car.model";


@Component({
  selector: 'app-skgo-cars-list',
  templateUrl: './cars-component-list.html',
  styleUrl: './cars-component-list.css'
})
export class CarsComponentList implements OnInit{

  cars: Car[] =[];
  showModal:boolean=false;
  edit:boolean=false;
  selectedCar: any = null;
  carForm!: FormGroup ;
  minimizedCars: { [licensePlate: string]: boolean } = {};

  constructor( private carsService: CarsService) { }

  ngOnInit(): void {

    this.carsService.getCarList().subscribe( (responseData: Car[]) => {
      this.cars = responseData;
      this.cars.forEach(car => {
        if (car.licensePlate) {
          this.minimizedCars[car.licensePlate] = true;
        }
      });
    })
    this.carForm= this.carsService.initForm()

  }


  editCar(car: any) {

  }

  viewCar(car: any) {

  }

  toggleMinimize(licensePlate: string | undefined ) {
    if (!licensePlate) return;
    this.minimizedCars[licensePlate] = !this.minimizedCars[licensePlate];
    console.log(this.minimizedCars[licensePlate]);
  }
}
