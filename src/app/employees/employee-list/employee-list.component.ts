import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "src/app/shared/employees.service";
import { Employee } from "src/app/shared/employee.model";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  list: Employee[];
  constructor(private service: EmployeesService) {}

  ngOnInit() {
    this.service.getEmployee().subscribe((actionArray) => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Employee;
      });
    });
  }
}
