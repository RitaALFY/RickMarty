import { Component } from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  errMsg?:string
  constructor(private authService: AuthService, private router: Router) {
  }
  onSubmitAuthForm(loginForm:NgForm){
    if (loginForm.valid){
      const{ email, password} = loginForm.value
      this.authService
        .login(email,password)
        .then(() => this.router.navigateByUrl('/character'))
        .catch((errMsg:string) => this.errMsg= errMsg)
    }
  }

}
