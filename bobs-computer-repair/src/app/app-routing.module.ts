import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { ManagementComponent } from './management/management.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { ServiceRepairComponent } from './service-repair/service-repair.component';
import { RoleManagerComponent } from './role-manager/role-manager.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'security-questions', component: SecurityQuestionsComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'service-repair', component: ServiceRepairComponent },
  { path: 'not-found-page', component: NotFoundPageComponent },
  { path: 'internal-server-error', component: InternalServerErrorComponent },
  { path: 'role-manager', component: RoleManagerComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
