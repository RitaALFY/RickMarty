import { Component } from '@angular/core';
import {CharacterService} from "../../service/character/character.service";
import {Router} from "@angular/router";
import {Character} from "../../model/character.model";

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {
  constructor( private characterService: CharacterService, private router: Router) {
  }

  onHandleFormSubmitted(newCharacter: Omit<Character, "id">) {



    this.characterService
      .add(newCharacter)
      .then(() => this.router.navigateByUrl('/character'))
  }
}
