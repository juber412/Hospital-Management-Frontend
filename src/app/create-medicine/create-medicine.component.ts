import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

  medicines: Medicine = new Medicine;

  constructor(private medicineService:MedicineService,private router:Router){}

  saveMedicine(){
    return this.medicineService.createMedicine(this.medicines).subscribe(data =>{
      console.log(data);
      this.goToMedicine();     
      }
    )
  }
  goToMedicine(){
    return this.router.navigate(['view-medicine']);
  }
  onSubmit(){
    console.log("Medicine List" + this.medicines);
    this.saveMedicine();
  }
}
