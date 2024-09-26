import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTabListComponent } from './select-tab-list.component';

describe('SelectTabListComponent', () => {
  let component: SelectTabListComponent;
  let fixture: ComponentFixture<SelectTabListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTabListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectTabListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
