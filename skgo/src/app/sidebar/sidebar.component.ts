import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router'

import {CarsService} from "../cars/cars.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {SidebarService} from "./sidebar.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(300, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class SidebarComponent implements OnInit{


  menuItems = [
    { label: 'HOME', route: '/home',  icon: 'fas fa-home' },
    { label: 'Αυτοκίνητα', route: '/cars/list', icon: 'fa fa-car'},
    { label: 'Παραδόσεις', route: '/deliveries', icon: 'fa fa-user-check'  },
    { label: 'Επιστροφές', route: '/returns', icon: 'fa fa-hand-holding-usd' },
    { label: 'Συνεργείο', route: '/service' , icon: 'fa fa-warehouse' },
    { label: 'Κρατήσεις', route: '/bookings', icon: 'fa fa-blender-phone' }
  ];
  activeSection = this.menuItems[0].label;
  constructor(
    private carsService: CarsService,
    private router: Router,
    private sidebarService: SidebarService
  ) {}


  ngOnInit(): void {

  }




    setActiveSection(section: any) {
    this.activeSection = section.label;
    this.router.navigate([section.route]);
  }


}
