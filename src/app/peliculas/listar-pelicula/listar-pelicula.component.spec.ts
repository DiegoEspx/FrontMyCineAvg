import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasListarComponent } from './listar-pelicula.component';

describe('PeliculasListarComponent', () => {
  let component: PeliculasListarComponent;
  let fixture: ComponentFixture<PeliculasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeliculasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
