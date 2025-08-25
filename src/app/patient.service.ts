import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  // variable for api end point
  private baseUrl = "http://localhost:8080/api/v1/patients";

  getPatientList() : Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`);
  }

  createPatient(patient:Patient) : Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}/create`,patient);
  }

  getPatinetById(id:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseUrl}/${id}`);
  }

  updatePatientDetails(id:number,patient:Patient):Observable<Patient>{
    return this.httpClient.put<Patient>(`${this.baseUrl}/${id}`,patient);
  }

  deletePatientById(id:number):Observable<Patient>{
    return this.httpClient.delete<Patient>(`${this.baseUrl}/${id}`);
  }
    
}
