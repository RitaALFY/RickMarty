import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PersonnagesListComponent } from './view/personnages-list/personnages-list.component';
import { EpisodesListComponent } from './view/episodes-list/episodes-list.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { PersonnageDetailsComponent } from './view/personnage-details/personnage-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonnagesListComponent,
    EpisodesListComponent,
    NotFoundComponent,
    PersonnageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
