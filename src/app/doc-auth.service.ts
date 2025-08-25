import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocAuthService {

  constructor() { }

  authenticate(username: string, password: string) {
    if (username == 'juberdj' && password == 'Dj@04112') {
      sessionStorage.setItem('doctorName', username);
      return true;
    }
    else {
      return false;
    }
  }

  isDoctorLoggedIn() {
    let doctorName = sessionStorage.getItem('doctorName');
    return !(doctorName == null);
  }

  doctorLogout() {
    sessionStorage.removeItem('doctorName');
  }
}
