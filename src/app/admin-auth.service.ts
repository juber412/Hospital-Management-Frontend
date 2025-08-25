import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  constructor() { }

  authenticate(username: string, password: string) {
    if (username == 'djJuber' && password == 'Jubi@04112') {
      sessionStorage.setItem('adminName', username);
      return true;
    }
    else {
      return false;
    }
  }

  //for admin login 
  isAdminLoggedIn() {
    let adminName = sessionStorage.getItem('adminName');
    return !(adminName == null);
  }

  //for admin logout
  adminLogout() {
    sessionStorage.removeItem("adminName");
  }
}
