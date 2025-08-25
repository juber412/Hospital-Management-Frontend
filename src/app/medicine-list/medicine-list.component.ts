import { Component } from '@angular/core';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine-list',
  standalone: false,
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent {

  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService, private router: Router) { }

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines() {
    return this.medicineService.getMedicineList().subscribe(data => {
      this.medicines = data;
    }
    )
  }

  updateMedicine(id: number) {
    this.router.navigate(['update-medicine', id]);
  }

  deleteMedicine(id: number) {
    this.medicineService.deleteMedicineById(id).subscribe(data => {
      console.log(data);
      this.getMedicines();
    });
  }

}
