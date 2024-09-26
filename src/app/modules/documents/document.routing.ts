import { Routes } from "@angular/router";

import { DocumentComponent } from './document/document.component';
import { AjouterDocumentComponent } from "./ajouter-document/ajouter-document.component";
import { ModifierDocumentComponent } from "./modifier-document/modifier-document.component";


export const DocumentRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "liste",
        component: DocumentComponent
      },
      {
        path: "nouveau",
        component: AjouterDocumentComponent
      },
      {
        path: "modifier/:num",
        component: ModifierDocumentComponent
      },
    ]
  }
];
