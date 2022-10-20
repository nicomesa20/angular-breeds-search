import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs'
import { Breed } from 'src/app/models/breed-list-response.type';

@Component({
  selector: 'app-dogs-search',
  templateUrl: './dogs-search.component.html',
  styleUrls: ['./dogs-search.component.scss']
})
export class DogsSearchComponent {

  @Input() breedsContext$: Observable<Breed>;
  @Output() onSearch = new EventEmitter<{ breed: string; subBreed?: string }>();

  constructor() { }

  handleOnSearch(val: { breed: string; subBreed?: string }) {

    this.onSearch.emit(val)
  }

}
