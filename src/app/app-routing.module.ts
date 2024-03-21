import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { CvComponent } from "./cv/cv.component";
import { TestComponent } from "./test/test.component";

const routes: Routes = [
  { path: "cv", component: CvComponent },
  { path: "test", component: TestComponent },
  { path: "", component: AccueilComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
