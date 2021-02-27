import { Component, OnInit } from '@angular/core';
import { ClimateService } from '../climate.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
 
  WeatherData: any;


  constructor(private climateService: ClimateService) { }

  ngOnInit(): void {
   
  this.climateService.sendGetRequest().subscribe(data =>{
    console.log(data);
    this.WeatherData = data;
  }) 

  }
}
