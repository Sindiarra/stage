import { Routes } from "@angular/router";

import { AjouterActeComponent } from './ajouter-acte/ajouter-acte.component';
import { ListeActeComponent } from './liste-acte/liste-acte.component';
import { ModifierActeComponent } from './modifier-acte/modifier-acte.component';

export const ActeRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: ListeActeComponent
      },
      {
        path: "nouveau",
        component: AjouterActeComponent
      },
      {
        path: "modifier/:numActe",
        component: ModifierActeComponent
      },
    ]
  }
];
