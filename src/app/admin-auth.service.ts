import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8080/api/auth/login";


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
