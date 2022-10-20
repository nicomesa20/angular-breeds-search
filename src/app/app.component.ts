import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from './models/breed-list-response.type';
import { BreedsService } from './services/breeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  breedsContext$: Observable<Breed>;
  breedImages$: Observable<string[]>;
  currentTheme: 'theme-dark' | 'theme-light' | undefined;
  value = ''

  constructor(
    private readonly renderer: Renderer2,
    private readonly breedsService: BreedsService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.breedsContext$ = this.breedsService.listBreeds()
  }

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark';
  }

  onDarkModeSwitched(checked: boolean) {
    this.currentTheme = checked ? 'theme-dark' : 'theme-light';
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme);
    localStorage.setItem('activeTheme', this.currentTheme);
  }

  searchBreeds({ breed, subBreed }: { breed: string; subBreed?: string } | any) {
    this.breedImages$ = this.breedsService.listPhotos(breed, subBreed)
  }
}
