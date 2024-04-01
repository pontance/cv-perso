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
          "Le site intranet de l’ENM constitue un espace collaboratif à destination du personnel de l’ENM, des magistrats, des personnels de justice, des formateurs et des étudiants magistrats." +
          "\n" +
          " Cet espace a pour vocation de partager et communiquer, mais aussi de permettre la consultation ou la recherche d’actualités, des documents ou d’informations.",
        description:
          "La refonte de cet intranet a été réalisée sous Sharepoint Server 2019 pour permettre l’élaboration du site à l’aide de la création des pages alimentées par des Webparts (des composants natifs de sharepoint ou développé à l'aide du framework React) ainsi que pour la facilités qu’offre SharePoint quant à la gestion des documents, la création des espaces collaboratifs et la communication interne et externe." +
          "\n" +
          "L'utilisation de Powershell a aussi été nécessaire pour la migration d'archives ",
        listeTechnologie: [
          {
            icone: "../../assets/icon_react.png",
            technologie: "React",
          },
          {
            icone: "../../assets/icon_html.png",
            technologie: "HTML",
          },
          {
            icone: "../../assets/icon_css.png",
            technologie: "CSS",
          },
          {
            icone: "../../assets/icon_typescript.png",
            technologie: "Typescript",
          },
          {
            icone: "../../assets/icon_sharepoint.png",
            technologie: "Sharepoint",
          },
          {
            icone: "../../assets/icon_powershell.png",
            technologie: "PowerShell",
          },
        ],
      },
      {
        visible: true,
        image: "../../assets/collectiv.png",
        image_popup: "../../assets/collectiv.png",
        titre: "Collect'iv",
        texte: "Logiciel de gestion des déchets d'Adventera",
        description: "",
        url: "https://www.adventera.fr/collectiv-developpement-logiciel/",
        listeTechnologie: [
          {
            icone: "../../assets/icon_angular.png",
            technologie: "Angular",
          },
          {
            icone: "../../assets/icon_html.png",
            technologie: "HTML",
          },
          {
            icone: "../../assets/icon_css.png",
            technologie: "CSS",
          },
          {
            icone: "../../assets/icon_typescript.png",
            technologie: "Typescript",
          },
          {
            icone: "../../assets/icon_typescript.png",
            technologie: "Java",
          },
          {
            icone: "../../assets/icon_sql.png",
            technologie: "SQL",
          },
        ],
      },
      {
        visible: true,
        image: "../../assets/smicval.png",
        image_popup: "../../assets/smicval.png",
        titre: "Extranet des élus du SMICVAL",
        texte: "Refonte du site extranet des élus du SMICVAL",
        description: "",
        listeTechnologie: [
          {
            icone: "../../assets/icon_react.png",
            technologie: "React",
          },
          {
            icone: "../../assets/icon_html.png",
            technologie: "HTML",
          },
          {
            icone: "../../assets/icon_css.png",
            technologie: "CSS",
          },
          {
            icone: "../../assets/icon_typescript.png",
            technologie: "Typescript",
          },
          {
            icone: "../../assets/icon_sharepoint.png",
            technologie: "Sharepoint",
          },
          {
            icone: "../../assets/icon_powershell.png",
            technologie: "PowerShell",
          },
        ],
      },
      {
        visible: true,
        image: "../../assets/portfolio.png",
        image_popup: "../../assets/portfolio.png",
        titre: "Portfolio",
        texte: "  Site web développeur",
        intro: "",
        description: "",
        listeTechnologie: [
          {
            icone: "../../assets/icon_angular.png",
            technologie: "Angular",
          },
          {
            icone: "../../assets/icon_html.png",
            technologie: "HTML",
          },
          {
            icone: "../../assets/icon_css.png",
            technologie: "CSS",
          },
          {
            icone: "../../assets/icon_typescript.png",
            technologie: "Typescript",
          },
        ],
      },
    ];
  }
}
