import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CearSitioComponent } from './cear-sitio.component';

describe('CearSitioComponent', () => {
  let component: CearSitioComponent;
  let fixture: ComponentFixture<CearSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CearSitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CearSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
