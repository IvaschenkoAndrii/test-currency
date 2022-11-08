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
    this.currencyService.getAll().subscribe(value => {
      this.currency = value;

      this.currency.findIndex(value => {
        this.rateDate = value.exchangedate;
        if (value.cc === 'USD') {
          this.rateUSD = parseFloat((value.rate).toFixed(2));
        } else if (value.cc === 'EUR') {
          this.rateEUR = parseFloat((value.rate).toFixed(2));
        }
      })
    })
  }
}
