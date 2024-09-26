import { Routes } from "@angular/router";

import { CourrierComponent } from "./courrier/courrier.component";
import { AjouterCourrierComponent } from './ajouter-courrier/ajouter-courrier.component';
import { ModifierCourrierComponent } from "./modifier-courrier/modifier-courrier.component";

export const CourrierRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: CourrierComponent
      },
      {
        path: "nouveau",
        component: AjouterCourrierComponent
      },
      {
        path: "modifier/:num",
        component: ModifierCourrierComponent
      },
    ]
  }
];
