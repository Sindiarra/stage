import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGrhComponent } from './ajouter-grh.component';

describe('AjouterGrhComponent', () => {
  let component: AjouterGrhComponent;
  let fixture: ComponentFixture<AjouterGrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGrhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterGrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
