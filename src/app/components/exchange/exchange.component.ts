import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CurrencyService} from "../../services/currency.service";
import {ICurrency} from "../../interfaces";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})

export class ExchangeComponent implements OnInit {
  // @Input()
  // rateUSD: number;
  //
  // @Input()
  // rateEUR: number;

  currency: ICurrency[];

  rateUSD: number;
  rateEUR: number;

  rateDate: string;

  form: FormGroup;

  constructor(private currencyService: CurrencyService) {
    this._initForm()
  }

  ngOnInit(): void {
  }

  _initForm(): void {
    this.form = new FormGroup({
      select1: new FormControl(1, [Validators.required]),
      select2: new FormControl(1, [Validators.required]),
      input1: new FormControl(null, [Validators.required]),
      input2: new FormControl(null, [Validators.required]),
    })
  }

  functionI1() {
    this.form.setValue({
      input1: this.form.value.input1,
      input2:(this.form.value.input1*this.form.value.select1/this.form.value.select2).toFixed(2),
      select1:this.form.value.select1,
      select2: this.form.value.select2
    })
  }

  functionI2() {
    this.form.setValue({
      input1: (this.form.value.input2*this.form.value.select2/this.form.value.select1).toFixed(2),
      input2: this.form.value.input2,
      select1:this.form.value.select1,
      select2: this.form.value.select2
    })
  }

  onChange() {
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
