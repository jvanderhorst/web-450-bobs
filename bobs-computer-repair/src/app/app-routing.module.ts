import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SecurityQuestionsComponent } from './security-questions/security-questions.component';
import { ManagementComponent } from './management/management.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { ServiceRepairComponent } from './service-repair/service-repair.component';
import { RoleManagerComponent } from './role-manager/role-manager.component';
import { LogFileComponent } from './log-file/log-file.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'security-questions', component: SecurityQuestionsComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'service-repair', component: ServiceRepairComponent },
  { path: 'not-found-page', component: NotFoundPageComponent },
  { path: 'internal-server-error', component: InternalServerErrorComponent },
  { path: 'role-manager', component: RoleManagerComponent },
  { path: 'log-file', component: LogFileComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
