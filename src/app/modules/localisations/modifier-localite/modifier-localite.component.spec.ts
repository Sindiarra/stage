import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierLocaliteComponent } from './modifier-localite.component';

describe('ModifierLocaliteComponent', () => {
  let component: ModifierLocaliteComponent;
  let fixture: ComponentFixture<ModifierLocaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierLocaliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierLocaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
