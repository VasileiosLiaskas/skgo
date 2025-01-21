import {Component, OnInit} from '@angular/core';

import {CarsService} from "./cars.service";
import {MenuItem} from "primeng/api";
import {FormGroup} from "@angular/forms";
import {TableContextMenuSelectEvent} from "primeng/table";


@Component({
  selector: 'app-skgo-cars-list',
  templateUrl: './cars-component-list.html',
  styleUrl: './cars-component-list.css'
})
export class CarsComponentList implements OnInit{

  cars:any;
  showModal:boolean=false;
  edit:boolean=false;
  menuItems: MenuItem[]=[];
  selectedCar: any = null;
  carForm!: FormGroup ;

  constructor( private carsService: CarsService) { }

  ngOnInit(): void {

    this.carsService.getCarList().subscribe( responseData => {
      this.cars = responseData;
    })
    this.menuItems = [
      {
        label: 'Edit',
        icon: 'pi pi-pencil',
        command: () => this.onEditCar()
      }
    ];

    this.carForm= this.carsService.initForm()
  }
  onEditCar() {
    if (this.selectedCar) {
      // Populate form with selected car's data
      this.carForm.patchValue({
        id: this.selectedCar.id,
        licensePlate: this.selectedCar.licensePlate,
        manufacturer: this.selectedCar.manufacturer,
        model: this.selectedCar.model,
        klm: this.selectedCar.klm
      });

      this.showModal = true; // Show the modal
      this.edit = true; // Set edit mode to true
    }
  }

  saveCar() {
    if (this.carForm){
      let car= this.carForm.value;
      this.carsService.saveCar(car).subscribe( responseData =>{
        console.log(responseData);
      });
    }
  }

  onPlusChange() {
    this.showModal= !this.showModal;
  }

  onRowSelect($event: TableContextMenuSelectEvent) {
    this.selectedCar= $event.data;

  }
}
