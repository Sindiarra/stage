import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterLocaliteComponent } from './ajouter-localite.component';

describe('AjouterLocaliteComponent', () => {
  let component: AjouterLocaliteComponent;
  let fixture: ComponentFixture<AjouterLocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterLocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterLocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
