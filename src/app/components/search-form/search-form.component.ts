import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Breed } from 'src/app/models/breed-list-response.type';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Input() breeds: Breed;
  @Output() onSearch = new EventEmitter<{ breed: string; subBreed?: string }>();
  searchForm: FormGroup;
  ngUnsubscribe$ = new Subject();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.onBreedChange();
    this.onFormChange();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(true);
    this.ngUnsubscribe$.complete();
  }

  get breedControl() {
    return this.searchForm.get('breed') as FormControl;
  }

  get subBreedControl() {
    return this.searchForm.get('subBreed') as FormControl;
  }

  get breedsKeys() {
    return Object.keys(this.breeds);
  }

  get subBreeds() {
    const breed: string = this.breedControl.value;
    if (!breed) return;
    return (this.breeds as any)[breed] as string[];
  }

  onBreedChange() {
    this.breedControl.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((_) => {
        this.subBreeds?.length
          ? this.subBreedControl.enable({ emitEvent: false })
          : this.subBreedControl.disable({ emitEvent: false });
        this.subBreedControl.setValue('', { emitEvent: false });
      });
  }

  onFormChange() {
    this.searchForm.valueChanges
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((val) => this.onRetrieveValue(val));
  }

  createForm() {
    this.searchForm = this.fb.group({
      breed: ['', Validators.required],
      subBreed: ['', { disabled: true }],
    });
  }

  onRetrieveValue(value: { breed: string; subBreed?: string }) {
    this.onSearch.emit(value);
  }
}
