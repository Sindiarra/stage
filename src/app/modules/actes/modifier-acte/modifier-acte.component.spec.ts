import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierActeComponent } from './modifier-acte.component';

describe('ModifierActeComponent', () => {
  let component: ModifierActeComponent;
  let fixture: ComponentFixture<ModifierActeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierActeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierActeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
