import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GRoutes } from "./grh.routing"; // Correction ici
import { ListeGrhComponent } from "./liste-grh/liste-grh.component";
import { AjouterGrhComponent } from "./ajouter-grh/ajouter-grh.component";
import { ModifierGrhComponent } from "./modifier-grh/modifier-grh.component";

// Import des modules utilisés
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { NgxPrintModule } from "ngx-print";
import { ComponentsModule } from "../../components/components.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    ListeGrhComponent,
    AjouterGrhComponent,
    ModifierGrhComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(GRoutes), // Utilisation de GRoutes ici
    NgxDatatableModule,
    ProgressbarModule.forRoot(),
    BsDropdownModule.forRoot(),
    PaginationModule.forRoot(),
    TooltipModule.forRoot(),
    NgxPrintModule,
    FormsModule,
    ComponentsModule,
    NgbModule
  ]
})
export class GrhModule {}
