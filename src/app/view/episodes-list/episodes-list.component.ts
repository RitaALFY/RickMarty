import {Component, OnInit} from '@angular/core';
import {Episode} from "../../model/episode.model";
import {EpisodeService} from "../../service/episode/episode.service";

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit{
episodes$!: Promise<Episode[]>
constructor(private episodeService: EpisodeService) {
}
ngOnInit() {console.log('toto')
  this.episodes$= this.episodeService.getAll()

}


}
