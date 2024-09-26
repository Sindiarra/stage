import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { NgxPrintModule } from "ngx-print";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";

import { DocumentRoutes } from "./document.routing";
import { ComponentsModule } from "../../components/components.module";
import { DocumentComponent } from './document/document.component';
import { AjouterDocumentComponent } from "./ajouter-document/ajouter-document.component";
import { ModifierDocumentComponent } from "./modifier-document/modifier-document.component";
@NgModule({
  declarations: [DocumentComponent, AjouterDocumentComponent, ModifierDocumentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DocumentRoutes),
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    ComponentsModule,
    NgbModule,
    FormsModule
]
})
export class DocumentModule {}
