import {Component, OnInit} from '@angular/core';
import {Character} from "../../model/character.model";
import {CharacterService} from "../../service/character/character.service";
import {ActivatedRoute} from "@angular/router";
import {Episode} from "../../model/episode.model";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit{
  characters$!:Promise<Character[]>
  constructor(private charactersService:CharacterService, private route:ActivatedRoute,) {

  }
  ngOnInit() {

    const episode = this.route.snapshot.paramMap.get('name');

    if (episode) {
      this.characters$ = this.charactersService.getAllByEpisode(episode);
    } else {
      this.characters$ = this.charactersService.getAll();
    }
  }

  deleteCharacter(character: Character) {
    this.charactersService.deleteCharacterById(character.id).subscribe(() => {
      this.loadCharacters();
    });
  }

  private loadCharacters() {
    const episode = this.route.snapshot.paramMap.get('name');

    if (episode) {
      this.characters$ = this.charactersService.getAllByEpisode(episode);
    } else {
      this.characters$ = this.charactersService.getAll();
    }
  }
}
