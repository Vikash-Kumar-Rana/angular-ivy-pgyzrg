import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { VendorBillsComponent } from "./vendor-bills/vendor-bills.component";
import { WorkOrderComponent } from "./work-order/work-order.component";
import { FilesComponent } from "./files/files.component";
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriverWagesComponent } from './driver-wages/driver-wages.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavBarComponent,
    VendorBillsComponent,
    WorkOrderComponent,
    FilesComponent,
    VehiclesComponent,
    DriverWagesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
