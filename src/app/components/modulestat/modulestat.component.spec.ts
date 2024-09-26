import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulestatComponent } from './modulestat.component';

describe('ModulestatComponent', () => {
  let component: ModulestatComponent;
  let fixture: ComponentFixture<ModulestatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulestatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
