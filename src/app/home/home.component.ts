import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstMediaItem = {
    id: 1,
    name: 'BloodShot',
    medium: 'Movie',
    category: 'Action',
    year: 2020,
    watchedOn: 1294166565384,
    isFavorite: false
  };

  

}
