import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { Admin } from './components/admin/admin';

export const routes: Routes = [{ path: 'admincdp', component: Admin }, { path: '', component:  LandingPage},

];
