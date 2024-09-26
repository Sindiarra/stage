import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RouterModule } from "@angular/router";

import { LocalisationRoutes } from "./localisation.routing";
import { ComponentsModule } from "../../components/components.module";
import { LocaliteComponent } from './localite/localite.component';
import { AjouterLocaliteComponent } from './ajouter-localite/ajouter-localite.component';
import { ModifierLocaliteComponent } from './modifier-localite/modifier-localite.component';
import { ModifierAdresseComponent } from './modifier-adresse/modifier-adresse.component';
import { AjouterAdresseComponent } from './ajouter-adresse/ajouter-adresse.component';
import { AdresseComponent } from './adresse/adresse.component';
@NgModule({
  declarations: [
    LocaliteComponent,
    AjouterLocaliteComponent,
    ModifierLocaliteComponent,
    ModifierAdresseComponent,
    AjouterAdresseComponent,
    AdresseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(LocalisationRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ComponentsModule,
    NgbModule
]
})
export class LocalisationModule {}
