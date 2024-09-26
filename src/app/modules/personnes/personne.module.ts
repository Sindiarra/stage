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
import { FormsModule } from '@angular/forms';
import { PersonneRoutes } from "./personne.routing";
import { ComponentsModule } from "../../components/components.module";
import { PersonneComponent } from './personne/personne.component';
import { AjouterPersonneComponent } from './ajouter-personne/ajouter-personne.component';
import { ModifierPersonneComponent } from './modifier-personne/modifier-personne.component';
import { DropdownComponent } from "src/app/components/dropdown/dropdown.component";


@NgModule({
  declarations: [PersonneComponent, AjouterPersonneComponent, ModifierPersonneComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PersonneRoutes),
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
export class PersonneModule {
  
}
