import { Component, Input, OnInit } from "@angular/core";
import { ItemElement } from "../models/item.model";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() itemEl!: ItemElement;
  constructor() {}

  ngOnInit(): void {}
}
