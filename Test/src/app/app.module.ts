import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DeviceDetectorModule } from 'ngx-device-detector';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './private/components/main-component/main-component.component';

// import { ProfileComponent } from './profile/profile.component'
// import { LoginComponent } from './login/login.component'
// import { RegisterComponent } from './register/register.component'
// import { HomeComponent } from './home/home.component'
import { AuthenticationService } from './services/authentication.service'
import {AuthGuardService} from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { LoginRegisterComponent } from './components/login-register/login-register.component'



@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeviceDetectorModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthenticationService, AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
