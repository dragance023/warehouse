import { DetailViewComponent } from './documents/detail-view/detail-view.component';
import { AboutComponent } from './core/about/about.component';
import { HomeComponent } from './core/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './documents/list-view/list-view.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "documents", component: ListViewComponent },
  { path: "documents/:id", component: DetailViewComponent } /* svaku vrednost nakon /documents/ stavlja u parametar "id" */
];                                                          /* mi cemo staviti id od dokumenta u list-view.html >73Line  */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
