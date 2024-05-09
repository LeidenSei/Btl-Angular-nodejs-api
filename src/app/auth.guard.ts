import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth= localStorage.getItem("auth");
  const router:Router=new Router()
  if(!auth){
    router.navigate(["login"]);
    return false;
  }
  return true;
};
