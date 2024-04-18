import { Component, OnInit } from "@angular/core";
import { NavLinks } from "../models/navlink.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  header: any;
  navLinks!: NavLinks[];
  box: any;
  h2: any;

  constructor() {
    this.navLinks = [
      {
        link: "",
        label: "Accueil",
        description: "Accueil",
        visible: true,
      },
      {
        link: "cv",
        label: "Curriculum vitae",
        description: "curriculum vitae",
        visible: true,
      },
      {
        link: "portfolio",
        label: "Portfolio",
        description: "Portfolio",
        visible: true,
      },
      {
        link: "contact",
        label: "Contact",
        description: "Contact",
        visible: false,
      },
      {
        link: "test",
        label: "Test",
        description: "Test",
        visible: false,
      },
    ];
  }

  ngOnInit(): void {
    this.header = document.getElementById("header");
    this.box = document.getElementById("box");
    this.h2 = document.getElementById("h2");
  }

  ngAfterViewInit() {
    document.addEventListener("scroll", (ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(event: Event) {
    if (window.scrollY > 16 && window.innerWidth > 540) {
      this.header.style.height = "64px";
      this.box.style.height = "56px";
      this.box.style.width = "56px";
      this.h2.style.fontSize = "48px";
    } else {
      this.header.style.height = "128px";
      this.box.style.height = "96px";
      this.box.style.width = "96px";
      this.h2.style.fontSize = "96px";
    }
  }
}
