import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente08Component } from './componente08.component';

describe('Componente08Component', () => {
  let component: Componente08Component;
  let fixture: ComponentFixture<Componente08Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente08Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
