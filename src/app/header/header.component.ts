import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  header: any;
  navLinks!: any[];

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
  }

  ngAfterViewInit() {
    document.addEventListener("scroll", (ev) => {
      this.resizeHeader(ev);
    });
  }

  resizeHeader(event: Event) {
    if (window.scrollY > 64 && window.innerWidth > 540) {
      this.header.style.height = "64px";
    } else {
      this.header.style.height = "128px";
    }
  }
}
