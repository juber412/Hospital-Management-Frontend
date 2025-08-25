import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminAuthService } from '../admin-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: false,
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

  patients: Patient[] = [];
  constructor(private patientService: PatientService, private adminAuthService: AdminAuthService, private router: Router) { }

  ngOnInit(): void {

    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data;
    })
  }

  logout() {
    this.adminAuthService.adminLogout();
    this.router.navigate(['home']);
  }

}
