import { CanActivateFn, Router } from '@angular/router';

export const rotaGuard: CanActivateFn = (route, state) => {
  
  // Constante
  const rota = new Router;

  // Redirecionamento
  if(localStorage.getItem('nome') === 'Ralf'){
    return true;
  }else{
    rota.navigateByUrl('/pagina1');
    return false;
  }

};
