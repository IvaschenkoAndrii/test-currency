import {Component, OnInit} from '@angular/core';

import {ICurrency} from "../../interfaces";

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

  constructor() {
  }

  ngOnInit(): void {

  }

}
