import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  header: any;
  navLinks!: any[];
  box: any;
  h2: any;

  constructor() {
    this.navLinks = [
      {
        link: "",
        label: "Accueil",
        description: "Accueil",
      },
      {
        link: "cv",
        label: "Curriculum vitae",
        description: "curriculum vitae",
      },
      {
        link: "test",
        label: "Test",
        description: "Test",
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
    if (window.scrollY > 64 && window.innerWidth > 540) {
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
