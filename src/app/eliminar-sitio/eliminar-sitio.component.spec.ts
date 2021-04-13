import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSitioComponent } from './eliminar-sitio.component';

describe('EliminarSitioComponent', () => {
  let component: EliminarSitioComponent;
  let fixture: ComponentFixture<EliminarSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
