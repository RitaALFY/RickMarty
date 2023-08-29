import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../../model/character.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit{
  @Input() name! : string
  @Input() labelBtn!: string
  @Input() characterToUpdate!: Character

  @Output() formSubmitted: EventEmitter<Omit<Character, 'id'>> = new EventEmitter<Omit<Character, 'id'>>()
  characterForm!: FormGroup
  constructor( private  fb: FormBuilder) {
  }
  ngOnInit() {
    this.initForm()

  }

  private initForm() {
this.characterForm = this.fb.group({
  name:[this.characterToUpdate?.name || '', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  species:[this.characterToUpdate?.species || '', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  episode:[this.characterToUpdate?.episode || '', [Validators.required, Validators.minLength(2), Validators.maxLength(1000)]],
  image:[this.characterToUpdate?.image || '', [Validators.required]],


})
  }

  onSubmitForm() {
    if(this.characterForm.valid){
      const {name, species, episode,image} = this.characterForm.value
      const character: Omit<Character, 'id'> ={
        name,
        species,
        episode,
        image


      }
      this.formSubmitted.emit(character)

    }

  }
}
