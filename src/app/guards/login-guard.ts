import { inject } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AutService } from '../services/user/aut.service';

function checkEstatusAutenticacion (): boolean | Observable<boolean>
{
  const autService = inject(AutService); 
  const router = inject(Router); 

  return autService.checkEstatusAutenticacion()
                   .pipe(
                    tap(estado => {if(estado) router.navigate(['/private'])}), 
                    map(estado => !estado)
                   )
}
export const LoginGuard =()=>{
    return checkEstatusAutenticacion(); 
}