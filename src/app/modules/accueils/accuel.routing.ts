import { Routes } from "@angular/router";

import { AccueilComponent } from "./accueil/accueil.component";

export const AccueilRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: AccueilComponent
      }
    ]
  }
];
