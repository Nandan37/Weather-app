import { Component,OnInit } from '@angular/core';
import { CommonModule, Location,  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { GenericCardComponent } from '../generic-card/generic-card.component';



@Component({
  selector: 'app-weather',
  imports: [HttpClientModule, FormsModule, CommonModule, RouterModule, GenericCardComponent],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})


  export class WeatherComponent implements OnInit {
  userInput: string = '';
  cityName: string = '';
  temperature: number | null = null;
  weatherCondition: string = '';
  weatherIconUrl: string = '';
  errorMessage: string = '';

   defaultCities: string[] = ['Delhi', 'Mumbai', 'Bangalore', 'Paris', 'New York', 'Tokyo', 'Dubai', 'Berlin', 'Moscow'];
  defaultWeatherData: any[] = [];

  ngOnInit(): void {
    this.loadDefaultWeather();
  }

  
  loadDefaultWeather(): void {
    this.defaultCities.forEach(city => {

      const apiKey = '068caa44af1447d2ada202055251205'; 
      const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${(city)}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (!data.error) {
            this.defaultWeatherData.push({
              cityName: data.location.name,
              temperature: data.current.temp_c,
              condition: data.current.condition.text,
              iconUrl: data.current.condition.icon.replace('64x64', '128x128')
            });
          }
        })
        .catch(error => {
          console.error(`Error fetching data for ${city}:`, error);
        });
    });
  }

  fetchWeather() {
    if (!this.userInput.trim()) return;

    const apiKey = '068caa44af1447d2ada202055251205'; 
    const query = (this.userInput.trim());
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}`;

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
        this.weatherIconUrl = data.current.condition.icon.replace('64x64', '128x128');
        this.errorMessage = '';
      })
      .catch(error => {
        console.error('Fetch error:', error);
        this.errorMessage = 'Could not fetch weather data.';
      });
  }

  constructor(private location: Location){}

  goBack(): void {
  this.location.back();
}
}