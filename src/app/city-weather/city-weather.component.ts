import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-city-weather',
  imports: [HttpClientModule, CommonModule, HeaderComponent, ],
  templateUrl: './city-weather.component.html',
  styleUrl: './city-weather.component.css'
})

export class CityWeatherComponent implements OnInit {
  city!: string;
  weatherData: any;
  cityName: string = '';
  temperature: number | null = null;
  weatherCondition: string = '';
  weatherIconUrl: string = '';
  errorMessage: string = '';
  airQuality: any = {};
  windKph: number | null=null;
  windDirection : string='';
  humidity: number | null=null;
  precip: number | null=null;
  localtime: number | null=null;
  time: any
  isFlipped = false;

   forecastData: any[] = [];

  constructor(private route: ActivatedRoute, private location :Location) {}

  ngOnInit(): void {
    
    this.city = this.route.snapshot.paramMap.get('name') || '';
      console.log(this.city);

      if (this.city) {
      this.fetchWeather(); 
      this.fetchThreeDayForecast();
    }
    };
  


    fetchWeather() {
    

    const apiKey = '068caa44af1447d2ada202055251205'; 
    const query = this.city;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          this.errorMessage = data.error.message;
          this.cityName = '';
          this.temperature = null;
          this.weatherCondition = '';
          this.weatherIconUrl = '';
          return;
        }

        this.cityName = data.location.name;
        this.temperature = data.current.temp_c;
        this.weatherCondition = data.current.condition.text;
        this.weatherIconUrl = data.current.condition.icon.replace('64x64','128x128');
        this.windKph = data.current.wind_kph;
        this.windDirection= data.current.wind_dir;
        this.humidity= data.current.humidity;
        this.precip= data.current.precip_mm;
        this.localtime= data.location.localtime;
        

        this.errorMessage = '';
        
        console.log(this.temperature);
        this.airQuality = data.current.air_quality;
        console.log(this.airQuality);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        this.errorMessage = 'Could not fetch weather data.';
      });
  }
  

 fetchThreeDayForecast(): void {
  const apiKey = '068caa44af1447d2ada202055251205'; 
  const query = this.city;
  const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=3`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      this.forecastData = data.forecast.forecastday.map((day: any) => {
        const dateObj = new Date(day.date);
        const weekday = dateObj.toLocaleDateString('en-US', { weekday: 'long' });

        return {
          weekday,
          date: day.date,
          maxTempC: day.day.maxtemp_c,
          minTempC: day.day.mintemp_c,
          avgTempC: day.day.avgtemp_c,
          condition: day.day.condition.text,
          iconUrl: day.day.condition.icon.replace('64x64','128x128')
        };
      });

      console.log('3-day forecast:', this.forecastData);
    })
    .catch(error => {
      console.error('Error fetching forecast:', error);
    });
}

goBack() {
  this.location.back(); 
}

}
    

  




  
  

  