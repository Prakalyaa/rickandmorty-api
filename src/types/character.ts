//pagination info returned by api
export interface ApiInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

//location of character eg: name:ricky, url:www.rick&morty-api/character/ricky 
export interface CharacterLocation {
  name: string;
  url: string;
}

//character status
export type CharacterStatus = "Alive" | "Dead" | "unknown";

//character gender
export type CharacterGender = "Female" | "Male" | "Genderless" | "unknown";

//character details
export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: CharacterLocation;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

//format for api reponse
export interface CharactersResponse {
  info: ApiInfo;
  results: Character[];
}

// Filters supported by the Rick and Morty API
export interface CharacterFilters {
  name?: string;
  status?: CharacterStatus;
  species?: string;
  gender?: CharacterGender;
  page?: number;
}
