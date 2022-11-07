import {Component, OnInit} from '@angular/core';

import {ICurrency} from "../../interfaces";
import {CurrencyService} from "../../services/currency.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currency: ICurrency[];

  rateUSD: number;
  rateEUR: number;

  rateDate: string;

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.getAll().


    subscribe(value => {
      this.currency = value;

      const indexUSD = this.currency.findIndex(value => value.cc === 'USD');
      this.rateUSD = parseFloat((this.currency[indexUSD].rate).toFixed(2));

      const indexEUR = this.currency.findIndex(value => value.cc === 'EUR');
      this.rateEUR = parseFloat((this.currency[indexEUR].rate).toFixed(2));

      this.rateDate = this.currency[indexUSD].exchangedate;

    })
  }
}
