import { RouterModule, Routes } from '@angular/router';
import { aboutus } from './aboutus';
import { login } from './login';
import { vote } from './vote/vote';

const routes: Routes = 
[
  { path: '', component: login},
  { path: 'aboutus', component: aboutus},
  {path: 'vote', component: vote}
  //{ path: '**', component: notFound}
];

export const AppRoutingModule = RouterModule.forRoot(routes);