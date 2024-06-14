import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./user/user-route.routing').then((r) => r.USER_ROUTES),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./product/product.routing').then((r) => r.PRODUCT_ROUTES),
  },
];
