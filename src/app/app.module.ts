import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employees/employee/employee.component";
import { EmployeeListComponent } from "./employees/employee-list/employee-list.component";
import { EmployeesComponent } from "./employees/employees.component";
import { environment } from "src/environments/environment";
import { EmployeesService } from "./shared/employees.service";
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    OrdersComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule  
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
