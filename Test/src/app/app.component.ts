import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from './services/authentication.service'
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  credentials: TokenPayload = {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  };

  public changeView:boolean=false

  constructor(public auth: AuthenticationService, private router: Router) {}

  loginView(){
      this.changeView= false
  }

  registerView(){
    this.changeView= true
  }

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
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
        console.log(res)
        this.router.navigateByUrl('/main')
      },
      err => {
        console.error(err)
      }
    )
  }

}
