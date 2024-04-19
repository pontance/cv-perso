import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { CvComponent } from "./cv/cv.component";
import { TestComponent } from "./test/test.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "cv", component: CvComponent },
  { path: "test", component: TestComponent },
  { path: "", component: AccueilComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled",useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
