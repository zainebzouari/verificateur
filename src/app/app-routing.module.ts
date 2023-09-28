import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { MarqueComponent } from './marque/marque.component';
import { ViewFamilleComponent } from './viewfamille/viewfamille.component';
import { FamilleComponent } from './famille/famille.component';
import { EditFamilleComponent } from './edit-famille/edit-famille.component';
import { CbfilsComponent } from './cbfils/cbfils.component';
import { StationComponent } from './station/station.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'marque', component: MarqueComponent },
  { path: 'famille', component: ViewFamilleComponent },
  { path: 'famille/add', component: FamilleComponent },
  { path: 'famille/update/:idFamille', component: EditFamilleComponent },
  { path: 'cbfils', component: CbfilsComponent },
  { path: 'Station', component: StationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
