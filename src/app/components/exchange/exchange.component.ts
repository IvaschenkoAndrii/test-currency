import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})

export class ExchangeComponent implements OnInit {
  @Input()
  rateUSD: number;

  @Input()
  rateEUR: number;

  form: FormGroup;

  constructor() {
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
    this.form.valueChanges.subscribe(value =>
    this.form.patchValue({
      input1: value.input1,
      input2:(value.input1*value.select1/value.select2).toFixed(2),
      select1:value.select1,
      select2: value.select2
    },{ emitEvent: false }))
  }

  functionI2() {
    this.form.valueChanges.subscribe(value =>
    this.form.patchValue({
      input1: (value.input2*value.select2/value.select1).toFixed(2),
      input2: value.input2,
      select1:value.select1,
      select2: value.select2
    },{ emitEvent: false }))
  }
}
