import {Component, OnInit} from '@angular/core';
import {Character} from "../../model/character.model";
import {CharacterService} from "../../service/character/character.service";
import {ActivatedRoute} from "@angular/router";
import {Episode} from "../../model/episode.model";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters$!: Promise<Character[]>;
  filteredCharacters: Character[] = [];
  searchTerm$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private charactersService: CharacterService, private route: ActivatedRoute) {}

  ngOnInit() {
    const episode = this.route.snapshot.paramMap.get('name');

    if (episode) {
      this.characters$ = this.charactersService.getAllByEpisode(episode);
    } else {
      this.characters$ = this.charactersService.getAll();
    }

    this.characters$.then(characters => {
      this.filteredCharacters = characters;
    });
  }

  applyFilter() {
    this.characters$.then(characters => {
      this.filteredCharacters = characters.filter(character =>
        character.name.toLowerCase().includes(this.searchTerm$.value.toLowerCase())
      );
    });
  }



  deleteCharacter(character: Character) {
    this.charactersService.deleteCharacterById(character.id).subscribe(() => {
      this.loadCharacters();
    });
  }

  private async loadCharacters() {
    const characters = await this.characters$;
    this.filteredCharacters = characters;
  }


  // deleteCharacter(character: Character) {
  //   this.charactersService.deleteCharacterById(character.id).subscribe(() => {
  //     this.loadCharacters();
  //   });
  // }

  // private loadCharacters() {
  //   const episode = this.route.snapshot.paramMap.get('name');
  //
  //   if (episode) {
  //     this.characters$ = this.charactersService.getAllByEpisode(episode);
  //   } else {
  //     this.characters$ = this.charactersService.getAll();
  //   }
  // }


}
