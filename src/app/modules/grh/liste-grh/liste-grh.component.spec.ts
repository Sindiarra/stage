import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGrhComponent } from './liste-grh.component';

describe('ListeGrhComponent', () => {
  let component: ListeGrhComponent;
  let fixture: ComponentFixture<ListeGrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGrhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeGrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
