import {Component, Input, OnInit} from '@angular/core';



@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})

export class HeaderComponent implements OnInit {
  @Input()
  rateUSD: number;

  @Input()
  rateEUR: number;


  constructor() { }

  ngOnInit(): void {
  }

}
