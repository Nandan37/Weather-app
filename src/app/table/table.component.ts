import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-table',
  imports: [RouterModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 
  
  students = [ {
    "name": "akash",
    "summary" : "Akash is in setion A, he likes to play badmiton",
    "rollNumber": 1,
    "subjects": [
      "mathematics",
      "Science",
      "English"
    ]
  },
  {
    "name": "manoj",
    "summary" : "Manoj is in setion A, he likes to play cricket",
    "rollNumber": 2,
    "subjects": [
      "Mathematics",
      "History",
      "Geography"
    ]
  },
  {
    "name": "rahul",
    "summary" : "Rahul is in setion B, he likes to Read novels",
    "rollNumber": 3,
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  },

  {
    "name": "hemant",
    "summary" : "Hemant is in setion C, he likes to travel",
    "rollNumber": 4,
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  },

  {
    "name": "varun",
    "summary" : "Varun is in setion C, he likes to play football",
    "rollNumber": 5,
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  }
]
constructor(){
this.students.sort((a,b) => a.rollNumber- b.rollNumber);
}

searchName: string = '';
  matchedStudent: any = null;

  onSearch() {
    const name = this.searchName.toLowerCase();
    this.matchedStudent = this.students.find(
      student => student.name.toLowerCase() === name
    );
}





}
