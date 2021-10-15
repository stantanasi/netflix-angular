import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Credits } from 'src/app/models/credits.model';
import { Movie } from 'src/app/models/movie.model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie!: Movie;
  credits!: Credits;
  recommendations: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private theMovieDbService: TheMovieDbService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.theMovieDbService.getMovie(params.id)
        .subscribe(movie => this.movie = movie);

      this.theMovieDbService.getMovieCredits(params.id)
        .subscribe(credits => this.credits = credits);

      this.theMovieDbService.getMoviesRecommendations(params.id)
        .subscribe(recommendations => this.recommendations = recommendations.results);
    })
  }
}
