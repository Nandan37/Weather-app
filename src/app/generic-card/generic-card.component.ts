import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-generic-card',
  imports: [RouterModule, FormsModule],
  templateUrl: './generic-card.component.html',
  styleUrl: './generic-card.component.css',
  
})
export class GenericCardComponent {
  @Input() cityName! :any;
   @Input() temperature! :number;
    @Input() condition! :string;
    @Input() icon! : string;
    
    
}

