import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  private url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en';

  constructor(private http: HttpClient) { }

  getCoinData(): Observable<any> {
    // Make the API call to retrieve coin data
    return this.http.get<any>(`${this.url}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: '6',
        page: '1',
        sparkline: 'false',
        locale: 'en'
      }
    });
  }

}
