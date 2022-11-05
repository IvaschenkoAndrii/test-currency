import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";



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


  constructor() { }

  ngOnInit(): void {
  }


  functionS1() {
    console.log('s1');
  }

  functionS2() {
    console.log('s2');
  }

  functionI1() {
    console.log('i1');
  }

  functionI2() {
    console.log('i2');
  }
}
