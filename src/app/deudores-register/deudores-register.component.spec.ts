import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeudoresRegisterComponent } from './deudores-register.component';

describe('DeudoresRegisterComponent', () => {
  let component: DeudoresRegisterComponent;
  let fixture: ComponentFixture<DeudoresRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeudoresRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeudoresRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
