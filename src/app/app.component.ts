import { Component } from '@angular/core';
import { ClimateService } from './climate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  WeatherData: any;
  lat;
  lon;
  weather: any;
  isShowDiv = false;
  hello: string = "I am INC";
  bye: string = "I am DEC";
  title = 'weather';

  constructor(private climateService: ClimateService) { }

setWeatherData(data) {
    this.weather = data;
    let sunsetTime = new Date(this.weather.sys.sunset * 1000);
    this.weather.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.weather.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.weather.isNight = (currentDate.getTime() > sunsetTime.getTime());
    this.weather.isCloud = (currentDate.getTime() > sunsetTime.getTime());
    this.weather.temp_celcius = ((5/9) * (this.weather.main.temp - 32)).toFixed(0);
    this.weather.temp_min = ((5/9) * (this.weather.main.temp_min - 32)).toFixed(0);
    this.weather.temp_max = ((5/9) * (this.weather.main.temp_max - 32)).toFixed(0);
  }

   getCity(city) {
    this.climateService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
      this.setWeatherData(data); 
    })
  }

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  clickMe(operations: string) {
   let x = operations == 'INC' ? this.hello : this.bye;
    alert(operations);
    alert(x);
  }
}