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

import { ProprieteRoutes } from "./propriete.routing";
import { ComponentsModule } from "../../components/components.module";
import { ProprieteComponent } from './propriete/propriete.component';
import { AjouterProprieteComponent } from './ajouter-propriete/ajouter-propriete.component';
import { ModifierProprieteComponent } from './modifier-propriete/modifier-propriete.component';
@NgModule({
  declarations: [ProprieteComponent, AjouterProprieteComponent, ModifierProprieteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ProprieteRoutes),
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
export class ProprieteModule {}
