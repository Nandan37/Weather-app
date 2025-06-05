import { Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TableComponent } from './table/table.component';
import { WeatherComponent } from './weather/weather.component';
import { CityWeatherComponent } from './city-weather/city-weather.component';
import { GenericCardComponent } from './generic-card/generic-card.component';


export const routes: Routes = [

    

       
      {path: '', component: WeatherComponent},
       
      {  path: 'city/:name', component: CityWeatherComponent}
];
