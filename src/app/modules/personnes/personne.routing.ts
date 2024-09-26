import { Routes } from "@angular/router";

import { PersonneComponent } from './personne/personne.component';
import { AjouterPersonneComponent } from './ajouter-personne/ajouter-personne.component';
import { ModifierPersonneComponent } from "./modifier-personne/modifier-personne.component";

export const PersonneRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: PersonneComponent
      },
      {
        path: "nouveau",
        component: AjouterPersonneComponent
      },
      {
        path: "modifier/:num",
        component: ModifierPersonneComponent
      },
    ]
  }
];
