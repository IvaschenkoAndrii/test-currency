import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICurrency} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<ICurrency[]> {
    return this.httpClient.get<ICurrency[]>(urls.currency);
  }
}
