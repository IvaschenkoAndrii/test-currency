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
      select1: new FormControl(null,[Validators.required]),
      select2: new FormControl(null,[Validators.required]),
      input1: new FormControl(null, [Validators.required]),
      input2: new FormControl(null, [Validators.required]),
    })
  }

  functionS1() {
    console.log('s1');

  }

  functionS2() {
    console.log('s2');
  }

  functionI1() {
    console.log('i1');
    console.log(this.form.value.input1);
    this.form.setValue({
      input1: this.form.value.input1,
      input2:this.form.value.input1,
      select1:this.form.value.select1,
      select2: this.form.value.select1
    })
  }

  functionI2() {
    console.log('i2');
    this.form.setValue({
      input1: this.form.value.input2,
      input2:this.form.value.input2,
      select1:this.form.value.select1,
      select2: this.form.value.select1
    })
  }
}
