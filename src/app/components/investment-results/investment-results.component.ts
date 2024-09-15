import { InvestmentService } from './../../services/investment.service';
import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject} from '@angular/core';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private ivestmentService = inject(InvestmentService);

  results =computed( () => this.ivestmentService.resultsData());

  // results = this.ivestmentService.resultsData.asReadonly();

  // get results(){
  //   return this.ivestmentService.resultsData;
  // }

  // @Input() results? : {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number
  // }[] ;
  // results = input<{
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number
  //   }[]>();

}
