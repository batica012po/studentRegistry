import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoriListaComponent } from './profesori-lista.component';

describe('ProfesoriListaComponent', () => {
  let component: ProfesoriListaComponent;
  let fixture: ComponentFixture<ProfesoriListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoriListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoriListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
