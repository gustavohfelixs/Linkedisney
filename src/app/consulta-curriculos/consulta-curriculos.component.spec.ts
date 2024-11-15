import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCurriculosComponent } from './consulta-curriculos.component';

describe('ConsultaCurriculosComponent', () => {
  let component: ConsultaCurriculosComponent;
  let fixture: ComponentFixture<ConsultaCurriculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaCurriculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCurriculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
