import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { TvShow } from 'src/app/models/tv-show.model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularTvShows: TvShow[] = [];
  popularMovies: Movie[] = [];
  onAirTvShows: TvShow[] = [];
  topRatedTvShows: TvShow[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private theMovieDbService: TheMovieDbService) { }

  ngOnInit(): void {
    this.theMovieDbService.getPopularTvShows().subscribe(reponse => this.popularTvShows = reponse.results);
    this.theMovieDbService.getPopularMovies().subscribe(reponse => this.popularMovies = reponse.results);
    this.theMovieDbService.getOnAirTvShows().subscribe(reponse => this.onAirTvShows = reponse.results);
    this.theMovieDbService.getTopRatedTvShows().subscribe(reponse => this.topRatedTvShows = reponse.results);
    this.theMovieDbService.getTopRatedMovies().subscribe(reponse => this.topRatedMovies = reponse.results);
    this.theMovieDbService.getUpcomingMovies().subscribe(reponse => this.upcomingMovies = reponse.results);
  }

}
