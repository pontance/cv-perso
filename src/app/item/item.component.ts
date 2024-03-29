import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ItemElement } from "../models/item.model";
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() itemEl!: ItemElement;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(itemEl: any) {
    this.dialog.open(PopupComponent, {
      width: "70vw",
      height: "90vh",
      data: itemEl,
      autoFocus: false,
    });
  }
}
