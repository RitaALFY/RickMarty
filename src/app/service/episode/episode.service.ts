import { Injectable } from '@angular/core';
import {Environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Episode, EpisodeHttp} from "../../model/episode.model";
import {firstValueFrom, map} from "rxjs";
import {Character, CharacterHttp} from "../../model/character.model";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  private  baseApiUrl: string

  constructor(private http:HttpClient) {
    this.baseApiUrl = Environment.API_URL
  }

  getAll(): Promise<Episode[]> {
    return firstValueFrom(
      this.http
      .get<{results:EpisodeHttp[]}>(this.baseApiUrl + 'episode')
      .pipe(
      map(res => res.results.map(episodesHttp => Episode.fromEpisodeHttpToEpisode(episodesHttp)))
    )
  )
  }

}
