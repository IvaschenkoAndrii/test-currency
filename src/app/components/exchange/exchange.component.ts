import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ICurrency} from "../../interfaces";


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
      select1: new FormControl(null, [Validators.required]),
      select2: new FormControl(null, [Validators.required]),
      input1: new FormControl(null, [Validators.required]),
      input2: new FormControl(null, [Validators.required]),
    })
  }

  functionI1(element:any) {
    this.form.get(element)?.valueChanges.subscribe(value => {
      console.log(value);
      console.log(element);
      this.form. patchValue({input2: value*this.form.value.select1/this.form.value.select2});
      this.form.patchValue({select2:this.form.value.select2})
      this.form.patchValue({select1:this.form.value.select1})
     })}


  functionI2() {
//     this.form.get('input2')?.valueChanges.subscribe(value => {
//       this.form.patchValue({input1: value*this.form.value.select2/this.form.value.select1})
//       this.form.patchValue({select1:this.form.value.select1})
//       this.form.patchValue({select2:this.form.value.select2})
//     })
}
}
