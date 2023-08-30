export type EpisodeHttp = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url:string;


};

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url:string;

};

export namespace Episode {
  export function fromEpisodeHttpToEpisode(episodeHttp: EpisodeHttp): Episode {
    return {
      id: episodeHttp.id,
      name: episodeHttp.name,
      air_date: episodeHttp.air_date,
      episode: episodeHttp.episode,
      url:episodeHttp.url,

    };
  }
}
