import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponentComponent } from './private/components/main-component/main-component.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { AuthGuardService } from './services/auth-guard.service'


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginRegisterComponent},
  {path: 'main', component: MainComponentComponent,  canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
