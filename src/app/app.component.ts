import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface students {
  name: string;
  rollNumber: number| string|null;
  subjects: string;

  
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,HttpClientModule,FormsModule,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'first-app';

  students = [ {
    "name": "akash",
    "rollNumber": 1,
    "subjects": [
      "mathematics",
      "Science",
      "English"
    ]
  },
  {
    "name": "manoj",
    "rollNumber": 2,
    "subjects": [
      "Mathematics",
      "History",
      "Geography"
    ]
  },
  {
    "name": "rahul",
    "rollNumber": 3,
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  },

  {
    "name": "hemant",
    "rollNumber": 4,
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  },

  {
    "name": "varun",
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
  
ngOnInit() {
  let p= new Promise((resolve, reject) => {
    let a ="vishw"
       if(a == "vishwa"){
         resolve("success")
       }
         else{
           reject("failed")
         }
       
   
   
   })
   
   p.then((message)=> {
     console.log("Nandan")
   }).catch((message)=> {
     console.log("fail")
   })
    
}

}
