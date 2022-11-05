import {Component, OnInit} from '@angular/core';

import {ICurrency, IRates} from "../../interfaces";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currency: ICurrency[];

  // rates: IRates = {
  //   eur: 0,
  //   usd: 0
  // };

  rateUSD:number;
  rateEUR:number;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(value => {
      this.currency = value;

      if (this.currency[25].cc === 'USD') {
        this.rateUSD = parseFloat((this.currency[25].rate).toFixed(2));
      } else {
        const indexUSD = this.currency.findIndex(value => value.cc === 'USD');
        this.rateUSD = parseFloat((this.currency[indexUSD].rate).toFixed(2));
      }

      if (this.currency[32].cc === 'EUR') {
        this.rateEUR = parseFloat((this.currency[32].rate).toFixed(2));
      } else {
        const indexEUR = this.currency.findIndex(value => value.cc === 'EUR');
        this.rateEUR = parseFloat((this.currency[indexEUR].rate).toFixed(2));
      }

      console.log(this.rateUSD);
      console.log(this.rateEUR);
    })

  }

}
