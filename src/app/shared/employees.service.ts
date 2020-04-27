import { Injectable } from "@angular/core";
import { Employee } from "./employee.model";
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Injectable({
  providedIn: "root",
})
export class EmployeesService {
  formData: Employee;

  constructor(private firestore: AngularFirestore) {}

  getEmployee() {
    return this.firestore.collection('employees').snapshotChanges();
  }

}
