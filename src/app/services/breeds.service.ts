import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import endpointsConstant from '../constants/endpoints.constant';
import { BreedListResponse } from '../models/breed-list-response.type';
import { map } from 'rxjs'
import { IDogAPIStandarResponse } from '../models/dog-api-standar-response.interface';

const pipeAPIResponse = (val: any) => val.message;

@Injectable({
  providedIn: 'root'
})
export class BreedsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listBreeds() {
    return this.http.get<BreedListResponse>(`${environment.apiURL}${endpointsConstant.LIST_ALL_BREEDS}`).pipe(
      map(pipeAPIResponse)
    )
  }

  listPhotos(breed: string, subreed?: string) {
    if (!subreed) return this.listPhotosbyBreed(breed);
    return this.listPhotosBySubreed(breed, subreed)
  }

  private listPhotosbyBreed(breed: string) {
    return this.http.get<string[]>(`${environment.apiURL}${endpointsConstant.LIST_BREED_PHOTOS}/${breed}/images`).pipe(
      map(pipeAPIResponse)
    )
  }

  private listPhotosBySubreed(breed: string, subreed: string) {
    return this.http.get<string[]>(`${environment.apiURL}${endpointsConstant.LIST_BREED_PHOTOS}/${breed}/${subreed}/images`).pipe(
      map(pipeAPIResponse)
    )
  }
}
