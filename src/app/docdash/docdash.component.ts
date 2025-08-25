import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
import { DocAuthService } from '../doc-auth.service';

@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  constructor(private patientService: PatientService, private router: Router, private docAuthService: DocAuthService) { }

  patients: Patient[] = [];
  isSidebarOpen = false;

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    return this.patientService.getPatientList().subscribe(data => {
      this.patients = data;

    });
  }

  update(id: number) {
    return this.router.navigate([`update-patient`, id]);
  }

  delete(id: number) {
    return this.patientService.deletePatientById(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    });
  }

  viewPatient() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    this.docAuthService.doctorLogout();
    this.router.navigate(['home']);
  }
}
