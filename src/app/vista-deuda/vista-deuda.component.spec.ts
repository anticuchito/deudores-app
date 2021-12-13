import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDeudaComponent } from './vista-deuda.component';

describe('VistaDeudaComponent', () => {
  let component: VistaDeudaComponent;
  let fixture: ComponentFixture<VistaDeudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDeudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDeudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
