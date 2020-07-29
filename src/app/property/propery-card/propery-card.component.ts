import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propery-card',
  templateUrl: './propery-card.component.html',
  styleUrls: ['./propery-card.component.css']
})
export class ProperyCardComponent implements OnInit {
  Property :any ={
    Id :1,
    Name:"Birla House",
    Type: "House",
    Price :12000
  }
  constructor() { }

  ngOnInit(): void {
  }

}
