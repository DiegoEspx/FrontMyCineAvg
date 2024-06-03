import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSerieComponent } from './eliminar-serie.component';

describe('EliminarSerieComponent', () => {
  let component: EliminarSerieComponent;
  let fixture: ComponentFixture<EliminarSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
