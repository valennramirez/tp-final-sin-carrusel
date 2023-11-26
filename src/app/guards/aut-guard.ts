import { inject } from '@angular/core';
import { Router} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AutService } from '../services/user/aut.service';
import { User } from '../interfaces/user';

function checkEstatusAutenticacion (): boolean | Observable<boolean>
{
  const autService = inject(AutService); 
  const router = inject(Router); 

  const user: User | undefined = autService.currentUser; 

  return autService.checkEstatusAutenticacion()
                   .pipe(
                    tap(estado => {if(!estado) router.navigate(['/login'])})
                   )
}
export const AutGuard= () => {
  return checkEstatusAutenticacion(); 
}