import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  active = 1;
  links = [
    { id: 1, link: "VendorBills", name: "Vendor Bills" },
    { id: 2, link: "DriverWages", name: "DriverWages & CMPF" },
    { id: 3, link: "WorkOrders", name: "Work Orders" },
    { id: 4, link: "Vehicles", name: "Vehicles" },
    { id: 5, link: "VendorBills", name: "Vendor Bills" },
    { id: 6, link: "Vendors", name: "Vendors" },
    { id: 7, link: "Drivers", name: "Drivers" },
    { id: 8, link: "Files", name: "Files" }
  ];

  constructor() {}

  ngOnInit() {}
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
