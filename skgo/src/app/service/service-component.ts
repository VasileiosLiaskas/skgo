import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {CarsService} from "../cars/cars.service";
import {Car} from "../cars/car.model";
import {ServiceCarService} from "./service.service";


@Component({
  selector: 'app-service-component',
  templateUrl: './service-component.html',
  styleUrl: './service-component.css'
})
export class ServiceComponent implements OnInit{

  serviceTypes:any;
  serviceForm!: FormGroup;
  cars: Car[] | undefined;

  constructor( private serviceCarService: ServiceCarService,
               private carService: CarsService) {

  }

  ngOnInit(): void {

    this.serviceForm= this.serviceCarService.initForm();

    this.carService.getCarList().subscribe( responseData =>
      this.cars = responseData );

    this.serviceCarService.getServiceTypes().subscribe(
      (data) => {
        this.serviceTypes = data;
      });
  }


  onSubmit() {
    const service= this.serviceForm.value;

  }

}
