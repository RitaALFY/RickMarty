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

      this.characters$ = this.charactersService.getAll()


  }




}
