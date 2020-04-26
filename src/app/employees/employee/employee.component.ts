import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "src/app/shared/employees.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeesService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) 
    form.resetForm();
    this.employeeService.formData = {
      id: null,
      fullName: "",
      position: "",
      empCode: "",
      mobile: ""
    };
  }
}
