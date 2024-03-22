import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  listItem: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.listItem = [
      {
        image: "../../assets/enm.png",
        titre: "ENM",
        texte: "Intranet de l'ENM",
      },
      {
        image: "",
        titre: "Collect'iv",
        texte: "",
      },
      {
        image: "",
        titre: "SMICVAL",
        texte: "Extranet des élus du SMICVAL",
      },
    ];
  }
}
