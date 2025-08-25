import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {

  medicines: Medicine = new Medicine;
  id: number = 0;

  constructor(private medicineService: MedicineService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data => {
      this.medicines = data;
    });
  }

  goToMedicines() {
    return this.router.navigate(['view-medicine'])
  }

  onSubmit() {
    return this.medicineService.updateMedicineDetails(this.id, this.medicines).subscribe(data => {
      console.log(data);
      this.goToMedicines();
    });


  }




}
