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
        image: "../../assets/enm.png",
        titre: "ENM",
        texte: "Intranet de l'ENM",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies maximus orci, eu commodo tortor aliquet vel. Morbi viverra eros sit amet mauris sollicitudin tempus. Curabitur vitae bibendum erat. Proin purus lacus, feugiat vel eleifend quis, dignissim vitae felis. Ut vel eros id tellus elementum convallis sed ut urna. Vestibulum quam sem, volutpat vitae vehicula in, euismod id ligula. Nam sapien nibh, sagittis id semper ac, tincidunt vitae turpis. Vivamus vehicula pretium vulputate." +
          "\n" +
          "Proin diam neque, laoreet vitae lorem ac, aliquam tristique ante. Proin varius vestibulum ante, a bibendum velit. Nam id magna sed lectus eleifend interdum eu quis mauris. Suspendisse feugiat gravida malesuada. Donec turpis odio, tincidunt in ex nec, fermentum pellentesque arcu. Cras hendrerit imperdiet justo quis eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec congue commodo nunc a ornare. Phasellus eget justo tortor. Maecenas euismod ipsum mauris. Nunc tincidunt metus nec tempor tristique.",
      },
      {
        visible: true,
        image: "../../assets/collectiv.png",
        titre: "Collect'iv",
        texte: "Logiciel d'IMC",
        description: "",
        url: "https://www.adventera.fr/collectiv-developpement-logiciel/",
      },
      {
        visible: true,
        image: "../../assets/smicval.png",
        titre: "SMICVAL",
        texte: "Extranet des élus du SMICVAL",
        description: "",
      },
    ];
  }
}
