import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ThemeSwitchComponent } from './components/theme-switch/theme-switch.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { DogsGalleryComponent } from './components/dogs-gallery/dogs-gallery.component';
import { DogsSearchComponent } from './components/dogs-search/dogs-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitchComponent,
    SearchFormComponent,
    DogsGalleryComponent,
    DogsSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
