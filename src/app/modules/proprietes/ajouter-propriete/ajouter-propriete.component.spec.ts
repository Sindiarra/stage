import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProprieteComponent } from './ajouter-propriete.component';

describe('AjouterProprieteComponent', () => {
  let component: AjouterProprieteComponent;
  let fixture: ComponentFixture<AjouterProprieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterProprieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterProprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
