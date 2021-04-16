import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credits } from '../models/credits.model';
import { Movie } from '../models/movie.model';
import { ResponseList } from '../models/response-list.model';
import { Season } from '../models/season.model';
import { TvShow } from '../models/tv-show.model';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '966bc16006cd2667daf628d997d83afb';
  private apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjZiYzE2MDA2Y2QyNjY3ZGFmNjI4ZDk5N2Q4M2FmYiIsInN1YiI6IjYwMTQzNTRjYzhhMmQ0MDAzZmY0YzY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CmCAd4C8AYcAkx-YOTEVrSOghbkOPmIXKD1TwotFiSQ';

  constructor(private http: HttpClient) { }


  //
  // Movie
  //
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(`${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMoviesRecommendations(id: string): Observable<ResponseList<Movie>> {
    return this.http.get<ResponseList<Movie>>(`${this.apiUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`);
  }


  //
  // Movies
  //
  getPopularMovies(): Observable<ResponseList<Movie>> {
    return this.http.get<ResponseList<Movie>>(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  getTopRatedMovies(): Observable<ResponseList<Movie>> {
    return this.http.get<ResponseList<Movie>>(`${this.apiUrl}/movie/top_rated?api_key=${this.apiKey}`);
  }

  getUpcomingMovies(): Observable<ResponseList<Movie>> {
    return this.http.get<ResponseList<Movie>>(`${this.apiUrl}/movie/upcoming?api_key=${this.apiKey}`);
  }


  //
  // TV Show
  //
  getTvShow(id: string): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`);
  }
  
  getTvShowCredits(id: string): Observable<Credits> {
    return this.http.get<Credits>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`);
  }

  getTvShowSeason(id: string, season_number: string): Observable<Season> {
    return this.http.get<Season>(`${this.apiUrl}/tv/${id}/season/${season_number}?api_key=${this.apiKey}`);
  }
  
  getTvShowsRecommendations(id: string): Observable<ResponseList<TvShow>> {
    return this.http.get<ResponseList<TvShow>>(`${this.apiUrl}/tv/${id}/recommendations?api_key=${this.apiKey}`);
  }


  //
  // TV Shows
  //
  getPopularTvShows(): Observable<ResponseList<TvShow>> {
    return this.http.get<ResponseList<TvShow>>(`${this.apiUrl}/tv/popular?api_key=${this.apiKey}`);
  }

  getTopRatedTvShows(): Observable<ResponseList<TvShow>> {
    return this.http.get<ResponseList<TvShow>>(`${this.apiUrl}/tv/top_rated?api_key=${this.apiKey}`);
  }

  getOnAirTvShows(): Observable<ResponseList<TvShow>> {
    return this.http.get<ResponseList<TvShow>>(`${this.apiUrl}/tv/on_the_air?api_key=${this.apiKey}`);
  }
}
