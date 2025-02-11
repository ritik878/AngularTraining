import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AddressComponent } from './components/nestedRouting/address/address.component';
import { PrimaryAddressComponent } from './components/nestedRouting/primary-address/primary-address.component';
import { SecondaryAdressComponent } from './components/nestedRouting/secondary-adress/secondary-adress.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './compoenents/users/user-item/user-item.component';
import { LazyComponent } from './components/lazy/lazy.component';
import { AdminGuard } from './guards.guard';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { LifecyleParentComponent } from './components/lifecycle/lifecyle-parent/lifecyle-parent.component';

export const routes: Routes = [
    // {path:'',component:AppComponent},
    // {
    // path: 'data-binding', component: DataBindingComponent
    // },{path:'directive',component:DirectivesComponent},
    // {path:'home',component:HomeComponent}
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', component: AuthComponent },

    {
        path: 'home', component: HomeComponent, children: [
            { path: 'data-binding', component: DataBindingComponent },
            { path: 'directive', component: DirectivesComponent,canActivate:[AdminGuard] },
            { path: 'users', component: UsersComponent
             },
             { path: 'lazy', loadComponent:()=>
                import('./components/lazy/lazy.component').then(m => m.LazyComponent)
             },
             {path:'users/:id',component:UserItemComponent},
             {path:'products',component:ProductsListComponent},
             {path:'cart',component:CartComponent},
             {path:'lifecycle',component:LifecyleParentComponent},
            { path: 'address', component: AddressComponent,children:[
                {path:'primary',component:PrimaryAddressComponent},
                {path:'secondary',component:SecondaryAdressComponent
                }
            ] }
        ]
    },
    

];
