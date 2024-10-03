import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGrhComponent } from './modifier-grh.component';

describe('ModifierGrhComponent', () => {
  let component: ModifierGrhComponent;
  let fixture: ComponentFixture<ModifierGrhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierGrhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierGrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
