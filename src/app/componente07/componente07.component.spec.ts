import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente07Component } from './componente07.component';

describe('Componente07Component', () => {
  let component: Componente07Component;
  let fixture: ComponentFixture<Componente07Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente07Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
