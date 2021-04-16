import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits } from 'src/app/models/credits.model';
import { Season } from 'src/app/models/season.model';
import { TvShow } from 'src/app/models/tv-show.model';
import { TheMovieDbService } from 'src/app/services/the-movie-db.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvShow!: TvShow;
  credits!: Credits;
  seasons: Season[] = [];
  recommendations: TvShow[] = [];

  showSeason: number = 1;

  constructor(
    private route: ActivatedRoute, 
    private theMovieDbService: TheMovieDbService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.theMovieDbService.getTvShow(id).subscribe(tvShow => {
        this.tvShow = tvShow;

        if (tvShow.number_of_seasons) {
          for (let i = 1; i <= tvShow.number_of_seasons; i++) {
            this.theMovieDbService.getTvShowSeason(id, i.toString()).subscribe(season => {
              this.seasons.push(season);
              this.seasons.sort((a, b) => a.season_number - b.season_number);
            });
          }
        }
      });
      this.theMovieDbService.getTvShowCredits(id).subscribe(credits => this.credits = credits);
      this.theMovieDbService.getTvShowsRecommendations(id).subscribe(recommendations => this.recommendations = recommendations.results);
    }
  }

  selectChangeHandler (event: any) {
    this.showSeason = event.target.value;
  }
}
