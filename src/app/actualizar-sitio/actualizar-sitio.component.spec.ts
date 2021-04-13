import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSitioComponent } from './actualizar-sitio.component';

describe('ActualizarSitioComponent', () => {
  let component: ActualizarSitioComponent;
  let fixture: ComponentFixture<ActualizarSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
