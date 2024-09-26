import { Routes } from "@angular/router";

import { LocaliteComponent } from './localite/localite.component';
import { AjouterLocaliteComponent } from './ajouter-localite/ajouter-localite.component';
import { ModifierLocaliteComponent } from './modifier-localite/modifier-localite.component';
import { ModifierAdresseComponent } from './modifier-adresse/modifier-adresse.component';
import { AjouterAdresseComponent } from './ajouter-adresse/ajouter-adresse.component';
import { AdresseComponent } from './adresse/adresse.component';

export const LocalisationRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "adresse",
        component: AdresseComponent
      },
      {
        path: "nouvelle-adresse",
        component: AjouterAdresseComponent
      },
      {
        path: "modifier-adresse/:num",
        component: ModifierAdresseComponent
      },
      {
        path: "localite",
        component: LocaliteComponent
      },
      {
        path: "nouvelle-localite",
        component: AjouterLocaliteComponent
      },
      {
        path: "modifier-localite/:num",
        component: ModifierLocaliteComponent
      },
    ]
  }
];
