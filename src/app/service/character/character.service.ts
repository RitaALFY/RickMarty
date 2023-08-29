import { Injectable } from '@angular/core';
import {Environment} from "../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Character, CharacterHttp} from "../../model/character.model";
import {BehaviorSubject, firstValueFrom, map, Observable} from "rxjs";
import {Episode} from "../../model/episode.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseApiUrl: string
  private charactersSubject$: BehaviorSubject<Character[]>
  characters$: Observable<Character[]>

  constructor(private http: HttpClient) {
    this.baseApiUrl = Environment.API_URL;
    const initialCharaters = Character.generateExemplesCharacter();

    this.charactersSubject$ = new BehaviorSubject<Character[]>(initialCharaters)
    this.characters$ = this.charactersSubject$.asObservable()

  }

  get characters(): Character[] {
    return this.charactersSubject$.value.map(character => ({...character}));
  }

  getAll(): Promise<Character[]> {
    return firstValueFrom(
      this.http
        .get<{ results: CharacterHttp[] }>(this.baseApiUrl + 'character')
        .pipe(
          map(res => res.results.map(characterHttp => Character.fromCharacterHttpToCharacter(characterHttp)))
        )
    )
  }

  // getAllByEpisode(episode: Episode): Promise<Character[]> {
  //   return firstValueFrom(
  //     this.http
  //       .get<{ CharacterHttp[] }>(this.baseApiUrl + 'character/episode/' + episode)
  //       .pipe(
  //         map(characterHttp => characterHttp.map(characterHttp => Character.fromCharacterHttpToCharacter(characterHttp)))
  //           const characterHttpArray = response.characters;
  //           console.log('CharacterHttpArray by Episode:', characterHttpArray);
  //           return characterHttpArray.map(characterHttp => Character.fromCharacterHttpToCharacter(characterHttp));
  //         })
  //       )
  //   )
  // }


  getById(characterId: number): Promise<Character> {
    return firstValueFrom(
      this.http
        .get<CharacterHttp>(this.baseApiUrl + 'character/' + characterId)
        .pipe(
          map(characterHttp => Character.fromCharacterHttpToCharacter(characterHttp))
        )
    )
  }

  update(id: number, characterUpdated: Omit<Character, "id">): Promise<void> {
    return new Promise(
      (res) => {
        const characters = this.characters
        for (const [index, character] of characters.entries()) {
          if (character.id === id) {
            characters[index] = {
              ...character,
              ...characterUpdated
            }
            break
          }
        }
        this.charactersSubject$.next(characters)
        res()
      }
    )
  }





  add(newCharacter: Omit<Character, "id">): Promise<void> {
    return new Promise(
      (res, rej) => {
        const characters =this.characters
        let id = 1
        if(characters.length > 0) {
          const lastCharacter = this.characters[this.characters.length - 1]
          id = lastCharacter.id + 1
        }

        const newCharacterWithId = {
          id,
          ...newCharacter
        }

        characters.push(newCharacterWithId)

        this.charactersSubject$.next(characters)

        res()
      }
    )
      }

}


