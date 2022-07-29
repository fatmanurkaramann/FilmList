import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FilmServiceService } from 'src/app/services/film-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private filmService: FilmServiceService
  ) {}
  images = [
    {
      imageSrc:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1817070/header.jpg?t=1658782015',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        'https://d.neoldu.com/news/63154.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://iaahbr.tmgrup.com.tr/e74247/806/378/0/0/652/305?u=https://iahbr.tmgrup.com.tr/2021/12/02/la-casa-de-papel-yeni-sezon-olacak-mi-var-mi-la-casa-de-papel-5-sezon-2-kisim-ne-zaman-netflix-mujdeyi-duyurdu-1638457955915.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://i.ytimg.com/vi/YF1eYbfbH5k/maxresdefault.jpg',
      imageAlt: 'person2',
    },
  ]
  genres: any;
  ngOnInit(): void {
    this.getAllGenres();
  }
  getAllGenres() {
    this.filmService.getAllGenres().subscribe((response) => {
      this.genres = response.results;
    });
  }
}
