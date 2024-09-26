import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export enum SelectionType {
  single = "single",
  multi = "multi",
  multiClick = "multiClick",
  cell = "cell",
  checkbox = "checkbox"
}
@Component({
  selector: 'app-select-tab-list',
  templateUrl: './select-tab-list.component.html',
  styleUrls: ['./select-tab-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTabListComponent {
  _items : any[] = [];
  columns : any[] = [];
  @Input() titre!: string;
  @Input() infos!: string;
  @Output() itemChange = new EventEmitter<any[]>();
  @Input('items')
  set items(items: any[]) {
    this._items = items;
    
    this.temp = this._items.map((prop, key) => {
      return {
        ...prop,
        id: key
      };
    });
}
@Input('thead')
  set thead(thead: any[]) {
    this.columns = thead;
    
    this.columns.map(item => {
        //item.visible = item.visible || true;
    });
}

entries: number = 10;
selected: any[] = [];
temp = [];
activeRow: any;
SelectionType = SelectionType;
// constructor() {
  
// }
entriesChange($event) {
  this.entries = $event.target.value;
}
filterTable($event) {
  const val = $event.target.value.toLowerCase();

  this.temp = this._items.filter((d: any) => {
    for (const key in d) {
      // Vérification si la valeur est une chaîne de caractères
      if (typeof d[key] === 'string' && d[key].toLowerCase().indexOf(val) !== -1) {
        return true;
      }
    }
    return false;
  });
}
onSelect({ selected }) {
  this.selected.splice(0, this.selected.length);
  this.selected.push(...selected);
}
onActivate(event) {
  this.activeRow = event.row;
}
onValidate(selected:any[]):void {
  this.itemChange.emit(selected);
}
}
