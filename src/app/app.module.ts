import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { CvComponent } from "./cv/cv.component";
import { TestComponent } from "./test/test.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ItemComponent } from "./item/item.component";
import { PopupComponent } from "./popup/popup.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    CvComponent,
    TestComponent,
    PortfolioComponent,
    ItemComponent,
    PopupComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
