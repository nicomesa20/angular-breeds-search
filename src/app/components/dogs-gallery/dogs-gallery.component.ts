import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dogs-gallery',
  templateUrl: './dogs-gallery.component.html',
  styleUrls: ['./dogs-gallery.component.scss']
})
export class DogsGalleryComponent implements OnInit {

  @Input() breeds: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
