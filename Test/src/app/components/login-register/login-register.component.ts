import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../services/authentication.service'
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import {ResponseData} from './ResponseData'

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  public changeView:boolean=false

  constructor(public auth: AuthenticationService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  loginView(){
    this.changeView= false
}

registerView(){
  this.changeView= true
}

register() {
  this.auth.register(this.credentials).subscribe(
    (res) => {console.log(res)
      //this.router.navigateByUrl("/main");
    },
    err => {
      console.error(err);
    }
  );
}

login() {
  this.auth.login(this.credentials).subscribe(
    (res) => {
      this.userService.setUserLoggedIn(res);
      this.auth.getUserName().subscribe((response:ResponseData) => {
                        console.log("response",response)
        localStorage.setItem('username', response.user);
        this.router.navigate(['/main']);
        
       });
    },
    err => {
      console.error(err)
    }
  )
}

}
