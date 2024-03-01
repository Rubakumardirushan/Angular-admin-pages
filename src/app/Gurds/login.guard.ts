import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
export const loginGuard: CanActivateFn = () => {

  const localData =  localStorage.getItem('angular17token');
  if(localData != null) {

    return false;
  } else {


    return true;
  }
};
