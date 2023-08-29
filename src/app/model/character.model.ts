import {Episode, EpisodeHttp} from "./episode.model";

export  interface CharacterHttp{
  id: number,
  name: string,
  status: string,
  species: string,
  image: string,
  episode: EpisodeHttp


}
export interface Character{
  id: number,
  name: string,
  species: string,
  image: string,
  episode: string[]





}
export namespace Character {
  export function fromCharacterHttpToCharacter(characterHttp: CharacterHttp): Character {

    return {
      id: characterHttp.id,
      name: characterHttp.name,
      species: characterHttp.species,
      image: characterHttp.image,
      episode: Episode.fromEpisodeHttpToEpisode(characterHttp.episode),
    }
  }

  export function generateExemplesCharacter(): Character[] {
    const characters = [];
    for (let i = 1; i < 20; i++) {
      characters.push({
        id: i,
        name: `Character: ${i}`,
        species: "Human",
        image: `Character: ${i}.jpg`,
        episode: [`https://rickandmortyapi.com/api/episode/${i}`]
      });
    }
    return characters;
  }
}
