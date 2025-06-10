import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() showSearch : boolean=false;
  @Input() showWelcome: boolean = false;
  @Input() cityName: string = '';
  @Input() showBackButton :boolean= false;

   @Output() searchClicked = new EventEmitter<string>();
   @Output() backClicked = new EventEmitter<void>();
  userInput: string = '';

  onSearchClick() {
    this.searchClicked.emit(this.userInput);
  }

  onBackClick() {
  this.backClicked.emit();
}
}
