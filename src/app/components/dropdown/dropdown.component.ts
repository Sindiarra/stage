import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './dropdown.model';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownComponent {
  _items: Item[] = [];

  @Input() placeholder!: string;
  @Input() showSearch = true;
  @Input() showStatus = true;
  @Input() showError = false;
  @Input() defaultItem!:Item;
  @Output() itemChange = new EventEmitter<Item>();

  @Input('items')
  set items(items: Item[]) {
    this._items = items;
    
    this._items.map(item => {
        //item.visible = item.visible || true;
    });
    this.filtered = [...this._items];
}
filtered: Item[] = [];
item: Item | null = null;
private searchText = '';


get search(): string {
    return this.searchText;
}

set search(searchText: string) {
    this.searchText = searchText;

    const search = this.searchText.toLowerCase();
    if (!search) {
        this.filtered = [...this._items];
        return;
    }
    this.filtered = this._items.filter(i => i.name.toLowerCase().indexOf(search) !== -1);
}

get isEmpty(): boolean {
    return this.filtered.filter(i => i.visible).length === 0;
}

trackById(item: Item): number {
    return item.id;
}

onChange(item: Item): void {
    this.item = item;
    this.itemChange.emit(item);
   // this.item.visible=false;
}
onMouseDown(item: Item): void{
    if (item!) {
        this.item= item;
       // this.item.visible=true;
    }
    
}
  constructor() { }

  ngOnInit() {
    if(this.defaultItem! && this.defaultItem!=null){
        this.item=this.defaultItem;
    }
  }

}
//import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/

