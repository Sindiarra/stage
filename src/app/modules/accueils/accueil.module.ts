import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "../../components/components.module";

import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { AccueilComponent } from "./accueil/accueil.component";

import { RouterModule } from "@angular/router";
import { AccueilRoutes } from "./accuel.routing";
@NgModule({
  declarations: [AccueilComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forChild(AccueilRoutes)
  ],
  exports: [AccueilComponent]
})
export class AccueilModule {}
