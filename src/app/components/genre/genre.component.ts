import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmServiceService } from 'src/app/services/film-service.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private filmService:FilmServiceService) { }
  films:any[]=[]

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["genreName"]){
        this.getMoviesByGenre(params["genreName"])
      }
    })
  }
  getMoviesByGenre(genre:string){
    this.filmService.getMoviesByGenre(genre).subscribe(response=>{
      console.log(genre,response)
      this.films=response.results
    })
  }
}
