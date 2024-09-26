import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";

import { RouterModule } from "@angular/router";

import { ActeRoutes } from "./acte.routing";
import { ComponentsModule } from "../../components/components.module";
import { AjouterActeComponent } from './ajouter-acte/ajouter-acte.component';
import { ListeActeComponent } from './liste-acte/liste-acte.component';
import { ModifierActeComponent } from './modifier-acte/modifier-acte.component';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [ListeActeComponent, AjouterActeComponent, ModifierActeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ActeRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    NgxPrintModule,
    ComponentsModule,
    FormsModule
]
})
export class ActeModule {}
