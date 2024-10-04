import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GRoutes } from "./grh.routing"; // Correction ici
import { PersonnelComponent } from "./personnels/personnel/personnel.component";
import { AjouterPersonnelComponent } from "./personnels/ajouter-personnel/ajouter-personnel.component";
import { ModifierPersonnelComponent } from "./personnels/modifier-personnel/modifier-personnel.component";

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
    PersonnelComponent,
    AjouterPersonnelComponent,
    ModifierPersonnelComponent
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
