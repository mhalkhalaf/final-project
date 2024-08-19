import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const loginGuard: CanActivateFn = (route, state) => {
 const router = inject(Router)
 const authService = inject(AuthService)
 if(authService.isLoggedIn()){
  return true
 }
 else
 {
  router.navigate([`/login`])
  return false;
 }
};
