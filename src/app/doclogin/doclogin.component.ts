import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocAuthService } from '../doc-auth.service';

@Component({
  selector: 'app-doclogin',
  standalone: false,
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {

  username: string = "";
  password: string = "";
  invalidCredentials = false;

  constructor(private router: Router, private docAuth: DocAuthService) { }


  checkLogin() {

    if (this.docAuth.authenticate(this.username, this.password)) {
      this.router.navigate(['docdash']);
      this.invalidCredentials = false;
    }
    else {
      alert("Invalid Credentials");
      this.router.navigate(['home']);
      this.invalidCredentials = true;
    }
  }
}
