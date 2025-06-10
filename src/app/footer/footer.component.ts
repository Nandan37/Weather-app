import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  footerData : any;
  constructor(private http : HttpClient) {}
    
  

  ngOnInit(): void {
     this.http.get('/assets/footer.json').subscribe((data) => {

      this.footerData= data;
      console.log(this.footerData.name)
     });
    
      
  }

}
