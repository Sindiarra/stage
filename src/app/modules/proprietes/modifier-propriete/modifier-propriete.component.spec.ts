import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProprieteComponent } from './modifier-propriete.component';

describe('ModifierProprieteComponent', () => {
  let component: ModifierProprieteComponent;
  let fixture: ComponentFixture<ModifierProprieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierProprieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierProprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
