import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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
import { AmtTotalComponent } from './amt-total/amt-total.component';

import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule,
        MatToolbarModule, MatIconModule, MatMenuModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';


import { HttpClientModule } from '@angular/common/http';


import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './guards/auth.guard';
import { QuestionManagerComponent } from './question-manager/question-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SecurityQuestionsComponent,
    ManagementComponent,
    ResetPasswordComponent,
    AboutComponent,
    ContactComponent,
    AmtTotalComponent,
    NotFoundPageComponent,
    InternalServerErrorComponent,
    ServiceRepairComponent,
    RoleManagerComponent,
    LogFileComponent,
    QuestionManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, UserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
