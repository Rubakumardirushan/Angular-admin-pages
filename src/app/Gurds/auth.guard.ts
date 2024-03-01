import { CanActivateFn, Router } from '@angular/router';
import { AuthuserviceService } from '../services/authuservice.service';


export const authGuard: CanActivateFn = () => {



  const localData =  localStorage.getItem('angular17token');
  if(localData != null) {
    return true;
  } else {


    return false;
  }



};
