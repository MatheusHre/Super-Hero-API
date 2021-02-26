export enum HeroTypes {
    GET_HERO_REQUEST = 'GET_HERO_REQUEST',
    GET_HERO_SUCCESS = 'GET_HERO_SUCCESS',
    GET_HERO_FAILURE = 'GET_HERO_FAILURE'
}

export interface HeroItens{
    id: string,
    name: string,
  
    powerstats: {
      strength: string,
      speed: string,
      intelligence: string,
      durability: string,
      power: string,
      combat: string
    },
  
    biography: {
      "full-name": string,
      "alter-egos": string,
      aliases: string[],
      "place-of-birth": string,
      publisher: string,
      "first-appearance": string,
      alignment: string
    },
  
    appearance: {
      gender: string,
      race: string,
      height: string[],
      weight: string[]
    },
  
    work: {
      occupation: string,
      base: string
    },
  
    connections: {
      "group-affiliation": string,
      relatives: string
    },
  
    image: {
      url: string
    }
  }
  
export interface Hero{
    arrayHero: HeroItens[],
    loading: boolean,
    error: boolean
}

export interface HeroReducer{
    hero: Hero
}