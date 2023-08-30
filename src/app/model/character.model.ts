import { Episode, EpisodeHttp } from "./episode.model";

export interface CharacterHttp {
  id: number;
  name: string;
  species: string;
  image: string;
  type: string;
  gender: string;
  status: string;
  episode: EpisodeHttp[];
}

export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
  type: string;
  gender: string;
  status: string;
  episode: Episode[]; // Utilisez le modèle Episode ici
}

export namespace Character {
  export function fromCharacterHttpToCharacter(characterHttp: CharacterHttp): Character {
    return {
      id: characterHttp.id,
      name: characterHttp.name,
      species: characterHttp.species,
      image: characterHttp.image,
      type: characterHttp.type,
      gender: characterHttp.gender,
      status: characterHttp.status,
      episode: characterHttp.episode.map(episodeHttp => Episode.fromEpisodeHttpToEpisode(episodeHttp))
    };
  }

  export function generateExemplesCharacter(): Character[] {
    const characters = [];
    for (let i = 1; i < 20; i++) {
      characters.push({
        id: i,
        name: `Character: ${i}`,
        species: "Human",
        image: `Character: ${i}.jpg`,
        type: `Character: ${i}`,
        gender: `Character: ${i}`,
        status: `Character: ${i}`,
        episode: [
          {
            id: i,
            name: `Episode: ${i}`,
            air_date: `Air Date: ${i}`,
            episode: `Episode: ${i}`,
            url:`Episode: ${i}`
          }
        ]
      });
    }

    return characters;
  }
}
