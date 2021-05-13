import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Calculation } from './calculation.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor(private http:HttpClient) { }

  private result = 'http://localhost:8080/calculate/postresult';
  private getCal = 'http://localhost:8080/calculate/getLast10Calculations';
  private getTotalCal = 'http://localhost:8080/calculate/getTotalCalculations';


  public postResult(input) 
  {
    console.log("\n Inside post result"+JSON.stringify(input));
    return this.http.post<Calculation>(this.result, input);
  }

  public getCalculations() 
  {
    console.log(this.http.get<Calculation[]>(this.getCal));
    return this.http.get<Calculation[]>(this.getCal);
  }

  public getTotalCalculations() 
  {
    console.log(this.http.get<Number>(this.getTotalCal));
    return this.http.get<Number>(this.getTotalCal);
  }
}
