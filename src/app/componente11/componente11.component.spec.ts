import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente11Component } from './componente11.component';

describe('Componente11Component', () => {
  let component: Componente11Component;
  let fixture: ComponentFixture<Componente11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
