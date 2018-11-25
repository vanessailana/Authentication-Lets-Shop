import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: 'calculator.component.html',
  styleUrls: ['calculator.component.css']
})
export class CalculatorComponent {
  public number1 : number;
  public number2 : number;
  public result : number;

  public add(){
    this.result = this.number1 + this.number2
  }

  public mult(){
    this.result = this.number1 * this.number2
  }
    public sub(){
    this.result = this.number1 - this.number2
  }
    public divide(){
    this.result = this.number1 / this.number2
  }
}
