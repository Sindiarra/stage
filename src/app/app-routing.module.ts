import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AccueilComponent } from './modules/accueils/accueil/accueil.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "accueil",
  },

  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "accueil",
        loadChildren: () => import('./modules/accueils/accueil.module').then(m => m.AccueilModule)

      },
      {
        path: "courriers",
        loadChildren: () => import('./modules/courriers/courrier.module').then(m => m.CourrierModule)
      },
      {
        path: "actes",
        loadChildren: () => import('./modules/actes/acte.module').then(m => m.ActeModule)
      },
      {
        path: "personnes",
        loadChildren: () => import('./modules/personnes/personne.module').then(m => m.PersonneModule)
      },
      {
        path: "proprietes",
        loadChildren: () => import('./modules/proprietes/propriete.module').then(m => m.ProprieteModule)
      },
      {
        path: "documents",
        loadChildren: () => import('./modules/documents/document.module').then(m => m.DocumentModule)
      },

      {
        path: "grh",
        loadChildren: () => import('./modules/grh/grh.module').then(m => m.GrhModule)
      },

      {
        path: "localisations",
        loadChildren: () => import('./modules/localisations/localisation.module').then(m => m.LocalisationModule)
      },
    ]
  },

  {
    path: "**",
    redirectTo: "accueil"
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
