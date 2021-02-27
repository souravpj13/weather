import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  weather: any;

  url = 'https://api.openweathermap.org/data/2.5/weather';   //'https://restcountries.eu/rest/v2/all';
  apiKey = '794ee95e63c5a32aaf88cd813fa2e425';

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get("https://restcountries.eu/rest/v2/all");
  }

  getWeatherDataByCityName(city: string) {
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)

    return this.httpClient.get(this.url, {params});    
  }
  

}
