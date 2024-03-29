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
        visible: true,
        image: "../../assets/enm_3.png",
        image_popup: "../../assets/enm_2.png",
        titre: "Intranet de l'ENM",
        texte: "Refonte du site intranet de l'ENM",
        intro:
          "Refonte du site intranet de l'ENM (école nationale de la magistrature à Bordeaux), réalisée pendant mon alternance dans l'entreprise Item Média Concept.",
        description:
          "Cette refonte à été réalisée à l'aide de Sharepoint Server 2019 et du framework React." +
          "\n" +
          "L'intranet permet à l'utilisateur d'accéder aux actualités de l'école, à des documents administratifs et pédagogiques",
      },
      {
        visible: true,
        image: "../../assets/collectiv.png",
        image_popup: "../../assets/collectiv.png",
        titre: "Collect'iv",
        texte: "Logiciel de gestion des déchets d'Adventera",
        description: "",
        url: "https://www.adventera.fr/collectiv-developpement-logiciel/",
      },
      {
        visible: true,
        image: "../../assets/smicval.png",
        image_popup: "../../assets/smicval.png",
        titre: "Extranet des élus du SMICVAL",
        texte: "Refonte du site extranet des élus du SMICVAL",
        description: "",
      },
    ];
  }
}
