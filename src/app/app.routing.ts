import { Routes, RouterModule } from '@angular/router';
 
import { LoginComponent } from './componentLogin/index';
import { HomeComponent } from './componentHome/index';
import { AuthGuard } from './guard/index';
 
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
 
    { path: '**', redirectTo: '' }
];
 
export const routing = RouterModule.forRoot(appRoutes);