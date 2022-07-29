import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmServiceService {
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'moviesminidatabase.p.rapidapi.com',
    'x-rapidapi-key': 'c91d4631a6msh2a7e97620decc03p1fc95djsn93a2eef97922',
  });
  constructor(
    private httpClient: HttpClient,
    @Inject('filmUrl') private filmUrl
  ) {}

  getMoviesByGenre(genre: string) {
    let fullUrl = this.filmUrl + 'movie/byGen/' + genre + '/';

    return this.httpClient.get<any>(fullUrl, {
      headers: this.headers,
      params: { page_size: '20', page: '2' },
    });
  }
  getAllGenres() {
    let fullUrl = this.filmUrl + 'genres/';
    return this.httpClient.get<any>(fullUrl, {
      headers: this.headers,
    });
  }

}
