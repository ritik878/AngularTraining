import { CanActivateFn } from '@angular/router';

export const AdminChildAuthGuard: CanActivateFn = (route, state) => {
//   let role:any=localStorage.getItem('role');
//     if(!role || role!='admin'){
//         return false;
//     }
//     else{
//         return true;
//     }
return true;
};
