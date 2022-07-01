import { RouterModule, Routes } from '@angular/router';
import { aboutus } from './aboutus';
import { login } from './login';

const routes: Routes = 
[
  { path: '', component: login},
  { path: 'aboutus', component: aboutus},
  //{ path: '**', component: notFound}
];

export const AppRoutingModule = RouterModule.forRoot(routes);