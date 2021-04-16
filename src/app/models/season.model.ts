import { Episode } from "./episode.model";

export interface Season {
    _id: string;
    air_date: string;
    episodes: Episode[];
    name: string;
    overview: string;
    id: number;
    poster_path: string | null;
    season_number: number;
}
