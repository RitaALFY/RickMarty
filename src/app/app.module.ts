import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { EpisodesListComponent } from './view/episodes-list/episodes-list.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { CharacterDetailsComponent } from './view/character-details/character-details.component';
import { CharactersListComponent } from './view/characters-list/characters-list.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './view/login/login.component';
import { ProfileComponent } from './view/profile/profile.component';
import { AddCharacterComponent } from './view/add-character/add-character.component';
import { EditCharacterComponent } from './view/edit-character/edit-character.component';
import { CharacterFormComponent } from './component/character-form/character-form.component';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EpisodesListComponent,
    NotFoundComponent,
    CharacterDetailsComponent,
    CharactersListComponent,
    LoginComponent,
    ProfileComponent,
    AddCharacterComponent,
    EditCharacterComponent,
    CharacterFormComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
