import {Component, OnInit} from '@angular/core';
import {Character} from "../../model/character.model";
import {CharacterService} from "../../service/character/character.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Episode} from "../../model/episode.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { EpisodeService } from "../../service/episode/episode.service";


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent  implements OnInit {
  character$!: Promise<Character | undefined>
  private baseApiUrl = 'https://rickandmortyapi.com/api/';
  constructor(private characterService: CharacterService,private http: HttpClient,  private episodeService: EpisodeService,private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.character$ = this.characterService.getById(parseInt(id))
        .catch(() => undefined);
    } else {
      this.router.navigateByUrl('/character');
    }
  }












}



