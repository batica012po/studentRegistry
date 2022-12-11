import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesoriDetailsComponent } from './profesori-details.component';

describe('ProfesoriDetailsComponent', () => {
  let component: ProfesoriDetailsComponent;
  let fixture: ComponentFixture<ProfesoriDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesoriDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesoriDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
