import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActeComponent } from './liste-acte.component';

describe('ListeActeComponent', () => {
  let component: ListeActeComponent;
  let fixture: ComponentFixture<ListeActeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeActeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeActeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
