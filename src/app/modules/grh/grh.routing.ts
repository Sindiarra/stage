import { Routes } from "@angular/router";
import { PersonnelComponent } from './personnels/personnel/personnel.component';
import { AjouterPersonnelComponent } from "./personnels/ajouter-personnel/ajouter-personnel.component";
import { ModifierPersonnelComponent } from "./personnels/modifier-personnel/modifier-personnel.component";

export const GRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: PersonnelComponent
      },
      {
        path: "nouveau",
        component: AjouterPersonnelComponent
      },
      {
        path: "modifier/:num",
        component: ModifierPersonnelComponent
      },
    ]
  }
];
