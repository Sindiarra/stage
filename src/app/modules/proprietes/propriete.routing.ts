import { Routes } from "@angular/router";

import { ProprieteComponent } from "./propriete/propriete.component";
import { AjouterProprieteComponent } from './ajouter-propriete/ajouter-propriete.component';
import { ModifierProprieteComponent } from "./modifier-propriete/modifier-propriete.component";

export const ProprieteRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: ProprieteComponent
      },
      {
        path: "nouveau",
        component: AjouterProprieteComponent
      },
      {
        path: "modifier/:num",
        component: ModifierProprieteComponent
      },
    ]
  }
];
