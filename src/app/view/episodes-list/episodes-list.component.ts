import {Component, OnInit} from '@angular/core';
import {Episode} from "../../model/episode.model";
import {EpisodeService} from "../../service/episode/episode.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit{
episodes$!: Promise<Episode[]>
constructor(private episodeService: EpisodeService) {
}
ngOnInit() {
  this.episodes$= this.episodeService.getAll()

}




}
