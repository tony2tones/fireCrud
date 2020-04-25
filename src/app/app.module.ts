import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employees/employee/employee.component";
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { EmployeesComponent } from "./employees/employees.component";
import { environment } from "src/environments/environment";
import { EmployeesService } from "./shared/employees.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    EmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
