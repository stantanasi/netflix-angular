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
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.theMovieDbService.getMovie(id).subscribe(movie => this.movie = movie);
      this.theMovieDbService.getMovieCredits(id).subscribe(credits => this.credits = credits);
      this.theMovieDbService.getMoviesRecommendations(id).subscribe(recommendations => this.recommendations = recommendations.results);
    }
  }
}
