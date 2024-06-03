import { ComponentFixture, TestBed } from '@angular/core/testing';

import { seriesListarComponent } from './listar-serie.component';

describe('seriesListarComponent', () => {
  let component: seriesListarComponent;
  let fixture: ComponentFixture<seriesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [seriesListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(seriesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
