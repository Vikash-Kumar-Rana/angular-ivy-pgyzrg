import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  active = 1;
  links = [
    { title: "One", fragment: "one" },
    { title: "Two", fragment: "two" }
  ];

  constructor() {}

  ngOnInit() {}
  navbarOpen = false;
 
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
