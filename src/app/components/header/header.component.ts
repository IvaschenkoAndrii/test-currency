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
  // rates = {
  //   usd: 0,
  //   eur: 0,
  // };

  rates: IRates = {
    usd: 0,
    eur: 0
  };

  constructor(private currencyService: CurrencyService) {
  }

  ngOnInit(): void {
    this.currencyService.getAll().subscribe(value => {
      this.currency = value;

      if (this.currency[25].cc === 'USD') {
        this.rates.usd = parseFloat((this.currency[25].rate).toFixed(2));
      } else {
        const indexUSD = this.currency.findIndex(value => value.cc === 'USD');
        this.rates.usd = parseFloat((this.currency[indexUSD].rate).toFixed(2));
      }

      if (this.currency[32].cc === 'EUR') {
        this.rates.eur = parseFloat((this.currency[32].rate).toFixed(2));
      } else {
        const indexEUR = this.currency.findIndex(value => value.cc === 'EUR');
        this.rates.eur = parseFloat((this.currency[indexEUR].rate).toFixed(2));
      }


      // this.rates.usd = parseFloat((this.currency[25].rate).toFixed(2));
      // this.rates.eur = parseFloat((this.currency[32].rate).toFixed(2));

      console.log(this.rates.usd);
      console.log(this.rates.eur);
    })

  }

}
