import { Routes } from "@angular/router";
import { ListeGrhComponent } from "./liste-grh/liste-grh.component";
import { AjouterGrhComponent } from "./ajouter-grh/ajouter-grh.component";
import { ModifierGrhComponent } from "./modifier-grh/modifier-grh.component";

export const GRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: ListeGrhComponent
      },
      {
        path: "ajouter",
        component: AjouterGrhComponent
      },
      {
        path: "modifier/:num",
        component: ModifierGrhComponent
      },
    ]
  }
];
