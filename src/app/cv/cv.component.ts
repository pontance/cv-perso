import { Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.scss"],
})
export class CvComponent implements OnInit {
 
  @ViewChild('icons') private icons!: ElementRef<HTMLDivElement>;
  isVisible: boolean =false;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView(){
    if (this.icons){
      const rect = this.icons.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isVisible = topShown && bottomShown;
    }
  }
}
