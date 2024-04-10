import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rotaGuard } from './rota.guard';

describe('rotaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
