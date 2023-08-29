import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./view/not-found/not-found.component";
import {CharactersListComponent} from "./view/characters-list/characters-list.component";
import {CharacterDetailsComponent} from "./view/character-details/character-details.component";
import {EpisodesListComponent} from "./view/episodes-list/episodes-list.component";
import {AddCharacterComponent} from "./view/add-character/add-character.component";
import {EditCharacterComponent} from "./view/edit-character/edit-character.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'character' },
  { path: 'character', children: [
      { path: '', component: CharactersListComponent },
      { path: 'new', component: AddCharacterComponent },
      {
        path: 'episode', children: [
          { path: '', component: EpisodesListComponent },
          { path: ':name', component: CharactersListComponent },
        ]
      },
      { path: ':id', children: [
          { path: '', component: CharacterDetailsComponent },
          { path: 'edit', component: EditCharacterComponent }
        ]}
    ]},
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
