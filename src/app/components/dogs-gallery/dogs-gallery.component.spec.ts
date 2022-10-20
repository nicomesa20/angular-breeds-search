import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsGalleryComponent } from './dogs-gallery.component';

describe('DogsGalleryComponent', () => {
  let component: DogsGalleryComponent;
  let fixture: ComponentFixture<DogsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
