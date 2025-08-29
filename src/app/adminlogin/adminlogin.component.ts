import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin-auth.service';

@Component({
  selector: 'app-adminlogin',
  standalone: false,
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {

  username: string = "";
  password: string = "";
  message: string = "";
  user: any = null;
  invalidCredentials = false;

  constructor(private router: Router, private adminAuthService: AdminAuthService) { }


  checkLogin() {

    if (this.adminAuthService.authenticate(this.username, this.password)) {
      this.router.navigate(['admin']);
      this.invalidCredentials = false;
    }
    else {
      alert("Invalid Credentials");
      this.router.navigate(['home']);
      this.invalidCredentials = true;
    }
  }
}
