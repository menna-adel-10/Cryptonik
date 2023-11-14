import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeaturedService {

  constructor(private http: HttpClient) { }

  getAllCoinData() {
    return this.http.get(environment.baseApi)
  }
}
