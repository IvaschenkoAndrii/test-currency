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
    this.functionI1();
    this.functionI2();
  }

  _initForm(): void {
    this.form = new FormGroup({
      select1: new FormControl(1, [Validators.required]),
      select2: new FormControl(1, [Validators.required]),
      input1: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
      input2: new FormControl(null, [
        Validators.required,
        Validators.min(0)
      ]),
    })
  }


  functionI1(): void {
    this.form.get('input1')?.valueChanges
      .subscribe((v) =>
        this.form.setValue({
          input1: v,
          input2: (v * 3 / 2).toFixed(2),
          select1: 1,
          select2: 1
        })
      )
  }


  functionI2(): void {
    this.form.get('input2')?.valueChanges
      .subscribe((c) =>
        console.log(c)
      // this.form.setValue({
      //   input1: (c.input2 * c.select2 / c.select1).toFixed(2),
      //   input2: c,
      //   select1: c.select1,
      //   select2: c.select2
      // })
    )
  }

}
