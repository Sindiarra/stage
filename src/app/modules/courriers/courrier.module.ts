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

import { CourrierComponent } from "./courrier/courrier.component";
import { CourrierRoutes } from "./courrier.routing";
import { ComponentsModule } from "../../components/components.module";
import { AjouterCourrierComponent } from './ajouter-courrier/ajouter-courrier.component';
import { ModifierCourrierComponent } from './modifier-courrier/modifier-courrier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [CourrierComponent, AjouterCourrierComponent, ModifierCourrierComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(CourrierRoutes),
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
export class CourrierModule {}
