import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "src/app/shared/employees.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  constructor(
    private employeeService: EmployeesService,
    private firestore: AngularFirestore,
    private toasty: ToastrService
  ) {}


  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.employeeService.formData = {
      id: null,
      fullName: "",
      position: "",
      empCode: "",
      mobile: "",
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.firestore.collection('employees').add(data);
    this.resetForm(form);
    this.toasty.success('User added successfully', 'Success');
  }
}
