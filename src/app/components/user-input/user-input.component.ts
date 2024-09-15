import { InvestmentService } from './../../services/investment.service';
import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../../models/investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>()
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');


  constructor(private investmentService : InvestmentService) {}
  onSubmit(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment : +this.enteredInitialInvestment(),
      annualInvestment : +this.enteredAnnualInvestment(),
      expectedReturn : +this.enteredExpectedReturn(),
      duration : +this.enteredDuration()
    });
    // this.calculate.emit({
    //   initialInvestment : +this.enteredInitialInvestment(),
    //   annualInvestment : +this.enteredAnnualInvestment(),
    //   expectedReturn : +this.enteredExpectedReturn(),
    //   duration : +this.enteredDuration()
    // })
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
    // console.log("SUBMITTED!");
    // console.log(this.enteredInitialInvestment);
    // console.log(this.enteredAnnualInvestment);
    // console.log(this.enteredExpectedReturn);
    // console.log(this.enteredDuration);

  }
}
