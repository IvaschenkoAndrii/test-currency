import {Component, Input, OnInit} from '@angular/core';



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


  constructor() { }

  ngOnInit(): void {
  }

}
