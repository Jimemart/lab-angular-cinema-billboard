import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers:[CinemaService]
})
export class MyHomeComponentComponent implements OnInit {

  constructor(private myService:CinemaService) { }
    movies = this.myService.moviesArr
  ngOnInit() {
  }

}
