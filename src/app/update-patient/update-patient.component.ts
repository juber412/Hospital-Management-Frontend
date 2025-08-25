import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

  patients: Patient = new Patient;
  id:number = 0;
  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatinetById(this.id).subscribe(data=>{
      this.patients = data;
    });
  }

  onSubmit(){
    return this.patientService.updatePatientDetails(this.id,this.patients).subscribe(data=>{
      console.log(data);
      this.goToPatientDetails();
    });
  }

  goToPatientDetails(){
    this.router.navigate([`docdash`]);
  }


}
