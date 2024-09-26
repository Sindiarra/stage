import { Component, Input } from '@angular/core';
import { Stat } from './modulestat.model';

@Component({
  selector: 'app-modulestat',
  templateUrl: './modulestat.component.html',
  styleUrls: ['./modulestat.component.scss']
})

export class ModulestatComponent {
  items: Stat[] ;

  @Input() module!: string;
  @Input() user_role!: string;

  constructor() { }

  ngOnInit() {
    if(this.module=='Courrier'){
        this.items=[
          {
            title:'Nouveaux',
            value:'10',
            comment:'Ce mois',
            icon:'ni ni-email-83',
            color:'bg-gradient-danger'
          },{
            title:'Encours',
            value:'30',
            comment:'Cette semaine',
            icon:'ni ni-chart-pie-35',
            color:'bg-gradient-warning'
          }
          ,{
            title:'Traités',
            value:'15',
            comment:'Ce mois',
            icon:'ni ni-check-bold',
            color:'bg-gradient-green'
          }
          ,{
            title:'Total',
            value:'55',
            comment:'Cette semaine',
            icon:'ni ni-chart-bar-32',
            color:'bg-gradient-info'
          }
        ]
    }else if(this.module=='Personne'){
      this.items=[
        {
          title:'Physique',
          value:'10',
          comment:'Ce mois',
          icon:'ni ni-single-02',
          color:'bg-gradient-danger'
        },{
          title:'Morale',
          value:'30',
          comment:'Ce mois',
          icon:'fas fa-users',
          color:'bg-gradient-warning'
        }
        ,{
          title:'Héritier',
          value:'15',
          comment:'Ce mois',
          icon:'ni ni-badge',
          color:'bg-gradient-green'
        }
        ,{
          title:'Total',
          value:'55',
          comment:'Ce mois',
          icon:'ni ni-chart-bar-32',
          color:'bg-gradient-info'
        }
      ]
  }
  }
}
