import {Component, OnInit} from '@angular/core';
import {Character} from "../../model/character.model";
import {CharacterService} from "../../service/character/character.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent implements OnInit{
  characterToUpdate?: Character
  constructor(private characterService: CharacterService, private route: ActivatedRoute, private router:Router) {
  }
  ngOnInit() {
    const id =this.route.snapshot.paramMap.get('id')
    if(id){
      this.characterService.getById(parseInt(id))
        .then(character =>{
          this.characterToUpdate = character
          if(!this.characterToUpdate){
            this.router.navigateByUrl('/character')
          }
        })
    }
  }
  onHandleFormSubmitted(characterUpdated: Omit<Character,'id'>){
    this.characterService
      .update(this.characterToUpdate!.id, characterUpdated)
      .then(() => this.router.navigateByUrl('/character'))
  }

}
