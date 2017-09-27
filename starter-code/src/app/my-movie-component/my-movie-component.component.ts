import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../cinema.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css'],
  providers:[CinemaService]
})
export class MyMovieComponentComponent implements OnInit {
  movieId:any
  movieToShow:Object
  constructor(private route:ActivatedRoute, private service:CinemaService, private router:Router) { }
  myMovies = this.service.moviesArr

  ngOnInit() {
    this.route.params
        .subscribe((params)=>this.movieId = params['id'])

  this.movieToShow = this.myMovies[this.movieId-1]
  console.log(this.movieToShow)
  }

  goHome(){
    this.router.navigate(["home"])
  }

}
