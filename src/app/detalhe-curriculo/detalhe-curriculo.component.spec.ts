import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheCurriculoComponent } from './detalhe-curriculo.component';

describe('DetalheCurriculoComponent', () => {
  let component: DetalheCurriculoComponent;
  let fixture: ComponentFixture<DetalheCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheCurriculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
