import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {Service} from "./service.model";


@Injectable({
  providedIn: 'root',
})
export class ServiceCarService {

  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,
  ) {}

  private baseUrl = 'http://localhost:8080/services';

  getServiceTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/types`);
  }

  saveService(service:Service ){

  }

  initForm() {
    // return this.formBuilder.group({
    //   id: [null],
    //   vehicleId: [null, Validators.required],
    //   serviceDate: [null, Validators.required],
    //   expirationDate: [null, Validators.required],
    //   serviceType: [null, Validators.required],
    //   amount: [0, [Validators.required, Validators.min(0)]],
    //   remainingAmount: [0, [Validators.required, Validators.min(0)]],
    //   comments: [null]  // Adding comments field
    // });
    const service = new ServiceCar();
    let form= this.formBuilder.group(service);
    return form;
  }


}
