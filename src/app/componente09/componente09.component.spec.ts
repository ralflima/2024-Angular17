import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente09Component } from './componente09.component';

describe('Componente09Component', () => {
  let component: Componente09Component;
  let fixture: ComponentFixture<Componente09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente09Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
