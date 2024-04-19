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
        "Le site de l’Ecole Nationale de la Magistrature (ENM) avait besoin d’une refonte de son site intranet. ",
        description:"Celle-ci a été réalisée sous Sharepoint Server 2019, outil collaboratif de Microsoft permettant l’élaboration des sites à l’aide de la création des pages alimentées par des Webparts. " +
        "\n" +
        "" +
        "\n" +
        "Ces Webparts pouvaient être natives de Sharepoint, ou encore réalisées en React." +
        "\n" +
        "" +
        "\n" +
        "J’ai aussi eu recours à PowerShell pour la réalisation des scripts de récupération des données existantes dans l’ancien intranet." +
        "\n" +
        "" +
        "\n" +
        "Ce choix d’outil a été imposé par ENM, d’une part parce que l’ancien intranet était réalisé sous ces mêmes technologies, et d’autre part pour les facilités qu’offre SharePoint quant à la gestion des documents, la création des espaces collaboratifs et la communication interne et externe. ",
        
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
        intro: "COLLECT’IV est un logiciel créé par Adventera pour la gestion des déchets.",
        description: "L’équipe a œuvré pour créer une plateforme complète de services GRU et de ChatBot grâce à une IA pour un service de tarification des déchetteries." +
        "\n" +
        "" +
        "\n" +
        "J’ai participé au développement front-end de l’application web avec Angular. " +
        "\n" +
        "" +
        "\n" +
        "J’ai notamment réalisé  des écrans de configuration  permettant la gestion des différents types de conteneurs de la déchetterie ainsi que l’ajout de fonctionnalités." +
        "\n" +
        "" +
        "\n" +
        "Je suis également intervenu sur la correction de bugs principaux d'affichage, d'exécution ou de programmation. " +
        "\n" +
        "",
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
            icone: "../../assets/icon_java.png",
            technologie: "Spring",
          },
          {
            icone: "../../assets/icon_sql.png",
            technologie: "SQL",
          },
        ],
      },
      {
        visible: true,
        image: "../../assets/smicval_2.png",
        image_popup: "../../assets/smicval_2.png",
        titre: "Extranet des élus du SMICVAL",
        texte: "Refonte du site extranet des élus du SMICVAL",
        intro:
          "Notre client, le SMICVAL est un syndicat qui assure une mission de collecte et traitement des déchets sur le territoire du Libournais et de la Haute Gironde.",
        description:
        "Leur site extranet est un espace collaboratif sécurisé qui permet aux élus de chercher des documents (bilans d’AG, convocations, présences, docs administratifs, ...), de planifier des réunions et d’accéder aux informations relatives à toutes les autres instances. " +
        "\n" +
        "" +
        "\n" +
        "Le projet qui nous a été confié consistait en une mise à jour de la version SharePoint 2016 vers SharePoint 2019 du site extranet." +
        "\n" +
        "" +
        "\n" +
        "La refonte du site extranet a été géré en mode AGILE." +
        "\n" +
        "" +
        "\n" +
        "J’ai notamment travaillé sur :" +
        "\n" +
        "" +
        "\n" +
        " • Le développement des scripts en PowerShell  et des webparts en React," +
        "\n" +
        "• la réalisation des tests unitaires, " +
        "\n" +
        "• la documentation des codes sources, "+
        "\n" +
        "• la participation à la phase des tests d’intégration, "+
        "\n" +
        "• la correction des anomalies suite aux retours de l’équipe tests et recette IMC, "+
        "\n" +
        "• la rédaction de la documentation technique. "+
        "\n" +
        "",
        
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
        texte: "Site web développeur",
        intro:
          "Site portfolio sur lequel vous êtes actuellemen et toujours en cours d'évolution.",
        description: "Ce site à été réalisé en Angular.",
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
