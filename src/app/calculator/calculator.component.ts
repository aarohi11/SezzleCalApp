import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';
import { Calculation } from '../calculation.model';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  Name:string;
  input:string;
  calculations: Calculation = new Calculation();
  results: Calculation[];
  totalcalc:any;
  lastcalc:any;
  output:string;
  valueadded:boolean;

  constructor(private calcService:CalculationService) { }

  ngOnInit() 
  {
      this.Name = sessionStorage.getItem("Name");
      this.input = '';
      this.output = '';
      this.valueadded = JSON.parse(sessionStorage.getItem("ValueAdded"));

      /*this.calcService.getTotalCalculations().subscribe( data => 
      {
          this.totalcalc = data;      
          console.log("Total Calculations:"+JSON.stringify(this.totalcalc));     
      });

      this.lastcalc = (this.totalcalc < 10 ? this.totalcalc : 10);*/

      this.calcService.getCalculations().subscribe( data => 
      {
          this.results = data;      
          console.log("Calculations:"+JSON.stringify(this.results));     
          for(var i=0;i<this.results.length;i++)
          {
            this.output = this.output + this.results[i].calString + "\n" + "\t";
          }
          console.log("Output:"+this.output);   
      });

      if(this.valueadded)
      {
         window.location.reload();
         this.valueadded = false;
         sessionStorage.setItem("ValueAdded",""+this.valueadded);
      }
      
  }

  pressNum(num)
  {
    // check if 0 in beginning
    if((num=="0" || num==".") && this.input=="")
    {
      alert("invalid input");
      return;
    }

    if(num=="." && this.input.indexOf(".")!=-1)
    {
      alert("invalid input");
      return;
    }
    this.input = this.input + num;
  }

  pressOperator(op)
  {
    // check if multiple operator simaltenously or operator without input
    if(this.input=="" && op!="")
    {
      alert("invalid input");
      return;
    }

    if(this.input.endsWith("+") || this.input.endsWith("-") || this.input.endsWith("*") || this.input.endsWith("/"))
    {
      if(op!="")
      {
        alert("Invalid operation");
        return;
      }
    }

    this.input = this.input + op;
  }

  getAnswer()
  {
    var answer = 0;
    var containsdecimal = "";
    for(var i=0;i<this.input.length;i++)
    {
      if(this.input[i] === '+' || this.input[i] === '-' || this.input[i] === '*' || this.input[i] === '/')
      {
        var num1 = JSON.parse(this.input[i-1]);
        var num2 = JSON.parse(this.input[i+1]);
        if(this.input[i] === '+')
        {
          if(i==1)
          {
            answer = answer + (num1+num2);
          }
          else
          {
            answer = answer + num2;
          }
        }
        else if(this.input[i] === '-')
        {
          if(i==1)
          {
            answer = answer + (num1-num2);
          }
          else
          {
            answer = answer - num2;
          }
        }
        else if(this.input[i] === '*')
        {
          if(i==1)
          {
            answer = answer + (num1*num2);
          }
          else
          {
            answer = answer * num2;
          }
        }
        else if(this.input[i] === '/')
        {
          if(i==1)
          {
            answer = answer + (num1/num2);
          }
          else
          {
            answer = answer / num2;
          }
        }
      }
    }
    this.input = this.input + "=" + answer;
    this.calculations.calString = this.input;
    this.calcService.postResult(this.calculations)
    .subscribe( data => {
      alert("Result added to logs successfully.");
    });
    this.valueadded = true;
    sessionStorage.setItem("ValueAdded",""+this.valueadded);
    window.location.reload();
  }

  clear()
  {
    this.input = this.input.slice(0, this.input.length-1);
  }

  allClear()
  {
    this.input = '';
  }

}
