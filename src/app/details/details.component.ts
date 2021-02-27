import { Component, OnInit } from '@angular/core';
import { ClimateService } from '../climate.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  DataTable: any;
  WeatherData: any;
  lat;
  lon;
  weather: any;

  hello: string = "I am INC";
  bye: string = "I am DEC";

  isShowDiv = false;

  constructor(private climateService: ClimateService) { }

  ngOnInit(): void {
   
    // $('.form-btn').click(function(){
    //   $(this).next().toggleClass('show-form');
    //   });
  

    //   $(document).ready(function () {
    //     $("#fold").click(function () {
    //         $("#fold_p").fadeOut(function () {
    //             $("#fold_p").text(($("#fold_p").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
    //         })
    //     })
    // });

  //     $('.form-btn1').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold1").click(function () {
  //             $("#fold_p1").fadeOut(function () {
  //                 $("#fold_p1").text(($("#fold_p1").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  //     $('.form-btn2').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold2").click(function () {
  //             $("#fold_p2").fadeOut(function () {
  //                 $("#fold_p2").text(($("#fold_p2").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  //   $('.form-btn3').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold3").click(function () {
  //             $("#fold_p3").fadeOut(function () {
  //                 $("#fold_p3").text(($("#fold_p3").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  //   $('.form-btn4').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold4").click(function () {
  //             $("#fold_p4").fadeOut(function () {
  //                 $("#fold_p4").text(($("#fold_p4").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  //   $('.form-btn5').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold5").click(function () {
  //             $("#fold_p5").fadeOut(function () {
  //                 $("#fold_p5").text(($("#fold_p5").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  // $('.form-btn6').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold6").click(function () {
  //             $("#fold_p6").fadeOut(function () {
  //                 $("#fold_p6").text(($("#fold_p6").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  //   $('.form-btn7').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold7").click(function () {
  //             $("#fold_p7").fadeOut(function () {
  //                 $("#fold_p7").text(($("#fold_p7").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  //   $('.form-btn8').click(function(){
  //       $(this).next().toggleClass('show-form');
  //       });

  //       $(document).ready(function () {
  //         $("#fold8").click(function () {
  //             $("#fold_p8").fadeOut(function () {
  //                 $("#fold_p8").text(($("#fold_p8").text() == 'Edit') ? 'Search' : 'Edit').fadeIn();
  //             })
  //         })
  //     });

  this.climateService.sendGetRequest().subscribe((data: any[])=>{
    console.log(data);
    this.weather = data;
  }) 

  }

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

  // setWeatherData1(data1) {
  //   this.weather1 = data1;
  //   let sunsetTime = new Date(this.weather1.sys.sunset * 1000);
  //   this.weather1.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather1.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather1.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather1.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather1.temp_celcius = ((5/9) * (this.weather1.main.temp - 32)).toFixed(0);
  //   this.weather1.temp_min = ((5/9) * (this.weather1.main.temp_min - 32)).toFixed(0);
  //   this.weather1.temp_max = ((5/9) * (this.weather1.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData2(data2) {
  //   this.weather2 = data2;
  //   let sunsetTime = new Date(this.weather2.sys.sunset * 1000);
  //   this.weather2.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather2.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather2.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather2.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather2.temp_celcius = ((5/9) * (this.weather2.main.temp - 32)).toFixed(0);
  //   this.weather2.temp_min = ((5/9) * (this.weather2.main.temp_min - 32)).toFixed(0);
  //   this.weather2.temp_max = ((5/9) * (this.weather2.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData3(data3) {
  //   this.weather3 = data3;
  //   let sunsetTime = new Date(this.weather3.sys.sunset * 1000);
  //   this.weather3.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather3.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather3.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather3.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather3.temp_celcius = ((5/9) * (this.weather3.main.temp - 32)).toFixed(0);
  //   this.weather3.temp_min = ((5/9) * (this.weather3.main.temp_min - 32)).toFixed(0);
  //   this.weather3.temp_max = ((5/9) * (this.weather3.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData4(data4) {
  //   this.weather4 = data4;
  //   let sunsetTime = new Date(this.weather4.sys.sunset * 1000);
  //   this.weather4.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather4.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather4.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather4.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather4.temp_celcius = ((5/9) * (this.weather4.main.temp - 32)).toFixed(0);
  //   this.weather4.temp_min = ((5/9) * (this.weather4.main.temp_min - 32)).toFixed(0);
  //   this.weather4.temp_max = ((5/9) * (this.weather4.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData5(data5) {
  //   this.weather5 = data5;
  //   let sunsetTime = new Date(this.weather5.sys.sunset * 1000);
  //   this.weather5.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather5.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather5.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather5.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather5.temp_celcius = ((5/9) * (this.weather5.main.temp - 32)).toFixed(0);
  //   this.weather5.temp_min = ((5/9) * (this.weather5.main.temp_min - 32)).toFixed(0);
  //   this.weather5.temp_max = ((5/9) * (this.weather5.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData6(data6) {
  //   this.weather6 = data6;
  //   let sunsetTime = new Date(this.weather6.sys.sunset * 1000);
  //   this.weather6.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather6.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather6.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather6.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather6.temp_celcius = ((5/9) * (this.weather6.main.temp - 32)).toFixed(0);
  //   this.weather6.temp_min = ((5/9) * (this.weather6.main.temp_min - 32)).toFixed(0);
  //   this.weather6.temp_max = ((5/9) * (this.weather6.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData7(data7) {
  //   this.weather7 = data7;
  //   let sunsetTime = new Date(this.weather7.sys.sunset * 1000);
  //   this.weather7.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather7.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather7.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather7.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather7.temp_celcius = ((5/9) * (this.weather7.main.temp - 32)).toFixed(0);
  //   this.weather7.temp_min = ((5/9) * (this.weather7.main.temp_min - 32)).toFixed(0);
  //   this.weather7.temp_max = ((5/9) * (this.weather7.main.temp_max - 32)).toFixed(0);
  // }

  // setWeatherData8(data8) {
  //   this.weather8 = data8;
  //   let sunsetTime = new Date(this.weather8.sys.sunset * 1000);
  //   this.weather8.sunset_time = sunsetTime.toLocaleTimeString();
  //   let currentDate = new Date();
  //   this.weather8.isDay = (currentDate.getTime() < sunsetTime.getTime());
  //   this.weather8.isNight = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather8.isCloud = (currentDate.getTime() > sunsetTime.getTime());
  //   this.weather8.temp_celcius = ((5/9) * (this.weather8.main.temp - 32)).toFixed(0);
  //   this.weather8.temp_min = ((5/9) * (this.weather8.main.temp_min - 32)).toFixed(0);
  //   this.weather8.temp_max = ((5/9) * (this.weather8.main.temp_max - 32)).toFixed(0);
  // }

  // getCity(city) {
  //   this.climateService.getWeatherDataByCityName(city).subscribe(data=>{
  //     this.weather = data;
  //     this.setWeatherData(data); 
  //   })
  // }
  
  // getCity1(city1) {
  //   this.climateService.getWeatherDataByCityName(city1).subscribe(data1=>{
  //     this.weather1 = data1;
  //     this.setWeatherData1(data1); 
  //   })
  // }

  // getCity2(city2) {
  //   this.climateService.getWeatherDataByCityName(city2).subscribe(data2=>{
  //     this.weather2 = data2;
  //     this.setWeatherData2(data2); 
  //   })
  // }

  // getCity3(city3) {
  //   this.climateService.getWeatherDataByCityName(city3).subscribe(data3=>{
  //     this.weather3 = data3;
  //     this.setWeatherData3(data3); 
  //   })
  // }

  // getCity4(city4) {
  //   this.climateService.getWeatherDataByCityName(city4).subscribe(data4=>{
  //     this.weather4 = data4;
  //     this.setWeatherData4(data4); 
  //   })
  // }

  // getCity5(city5) {
  //   this.climateService.getWeatherDataByCityName(city5).subscribe(data5=>{
  //     this.weather5 = data5;
  //     this.setWeatherData5(data5); 
  //   })
  // }

  // getCity6(city6) {
  //   this.climateService.getWeatherDataByCityName(city6).subscribe(data6=>{
  //     this.weather6 = data6;
  //     this.setWeatherData6(data6); 
  //   })
  // }

  // getCity7(city7) {
  //   this.climateService.getWeatherDataByCityName(city7).subscribe(data7=>{
  //     this.weather7 = data7;
  //     this.setWeatherData7(data7); 
  //   })
  // }

  // getCity8(city8) {
  //   this.climateService.getWeatherDataByCityName(city8).subscribe(data8=>{
  //     this.weather8 = data8;
  //     this.setWeatherData8(data8); 
  //   })
  // }

  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }

  clickMe(operations: string) {
   let x = operations == 'INC' ? this.hello : this.bye;
    alert(operations);
    alert(x);
  }

}
