import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterActeComponent } from './ajouter-acte.component';

describe('AjouterActeComponent', () => {
  let component: AjouterActeComponent;
  let fixture: ComponentFixture<AjouterActeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterActeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterActeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
