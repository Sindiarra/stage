import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCourrierComponent } from './modifier-courrier.component';

describe('ModifierCourrierComponent', () => {
  let component: ModifierCourrierComponent;
  let fixture: ComponentFixture<ModifierCourrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCourrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierCourrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
