import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
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

  ngOnInit(): void {}
}
