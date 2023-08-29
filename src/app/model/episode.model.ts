export  type EpisodeHttp =string[]

export type Episode =string[]
export namespace Episode{
  // mapper pour transformer les donne http en donnee front
  export function fromEpisodeHttpToEpisode(episodeHttp:EpisodeHttp): Episode{
    return episodeHttp
  }
}
