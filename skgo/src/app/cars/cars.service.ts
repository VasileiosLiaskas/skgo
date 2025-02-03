import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Car} from "./car.model";
import {FormBuilder} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class CarsService {


  constructor(private http: HttpClient,
              private formBuilder: FormBuilder,

              ) {}
  private baseUrl = 'http://localhost:8080/cars';


  getCar(id:any){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCarList(){
    return this.http.get<Car[]>(`${this.baseUrl}/list`);
  }

  initForm() {
    const car=new Car();
    let form= this.formBuilder.group(car);
    return form;
  }

  saveCar(car:any){
    return this.http.post(`${this.baseUrl}/save`, car);
  }
}

