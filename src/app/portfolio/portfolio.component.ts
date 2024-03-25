import { Component, OnInit } from "@angular/core";
import { ItemElement } from "../models/item.model";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  itemElements: ItemElement[] = [];
  constructor() {}

  ngOnInit(): void {
    this.itemElements = [
      {
        image: "../../assets/enm.png",
        titre: "ENM",
        texte: "Intranet de l'ENM",
      },
      {
        image: "",
        titre: "Collect'iv",
        texte: "Logiciel d'IMC",
      },
      {
        image: "",
        titre: "SMICVAL",
        texte: "Extranet des élus du SMICVAL",
      },
    ];
  }
}
