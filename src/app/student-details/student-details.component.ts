import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit {

  rollNumber! : number;
  student : any;

  students = [ {
    "name": "akash1",
    "summary" : "Akash is a hard-working student who does well in science and math. He enjoys solving problems and working with others. Outside of school, he is part of the debate team and helps out at community centers he likes to play badmiton",
    "rollNumber": 1,
    "imageUrl": 'https://th.bing.com/th/id/OIP.Nd0qlYDQXncW_74Xg3OK_QHaHa?w=182&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    "subjects": [
      "mathematics",
      "Science",
      "English"
    ]
  },
  {
    "name": "manoj",
    "summary" : "Manoj  loves learning about history and reading books. She speaks up a lot in class and enjoys writing stories. Sarah has won awards for her writing and is also involved in school plays.",
    "rollNumber": 2,
    "imageUrl" : 'https://th.bing.com/th/id/OIP.zeM8bXI9ZGPfludZ2ara5QHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    "subjects": [
      "Mathematics",
      "History",
      "Geography"
    ]
  },
  {
    "name": "rahul",
    "summary" : "Rahul is a quiet student who is good at programming and technology. He learns quickly and likes to use his skills to make apps and games. Michael wants to become a software developer in the future.",
    "rollNumber": 3,
    "imageUrl" : 'https://th.bing.com/th/id/OIP.RJLCmov_GDpHbawRN_361wHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  },

  {
    "name": "hemant",
    "summary" : "Hemant s a smart and organized student. She is good at reading and social studies, and he enjoys talking about books. Hemant also loves singing and is part of the school choir. She is learning new languages too.",
    "rollNumber": 4,
    "imageUrl" : 'https://th.bing.com/th/id/OIP.ombBKyx_BSvPgqroO6GBOAHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  },

  {
    "name": "varun",
    "summary" : "Varun is active and enjoys sports. He does well in subjects like geography and economics. He works well with others and is a great leader on the sports field and in the classroom",

    "rollNumber": 5,
    "imageUrl" : 'https://th.bing.com/th/id/OIP.xPhndVRxR9eHdts090o-NwHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    "subjects": [
      "Science",
      "English",
      "Computer Science"

    

    ]
  }
]

constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.rollNumber = Number(this.route.snapshot.paramMap.get('rollNumber'));
    this.student = this.students.find(s => s.rollNumber === this.rollNumber);
  }
}

