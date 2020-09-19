import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  weather: any;

  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = '6f2ce7cd49e05d12aea63d6039c71ff2';

  constructor(private http: HttpClient) { }

  
  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});    
  }
  

}
