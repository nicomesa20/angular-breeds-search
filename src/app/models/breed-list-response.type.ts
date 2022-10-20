import { IDogAPIStandarResponse } from './dog-api-standar-response.interface';

export type Breed = {
  [key: string]: string[];
}

export type BreedListResponse = IDogAPIStandarResponse<Breed>;
