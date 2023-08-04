import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarqueComponent } from './components/marque.component';
import { FamilleComponent } from './famille/famille.component';
import { CbfilsComponent } from './cbfils/cbfils.component';
import { EditFamilleComponent } from './edit-famille/edit-famille.component';

import { ViewFamilleComponent } from './viewfamille/viewfamille.component';
import { ArticleComponent } from './article/article.component';
const routes: Routes = [
  { path: '', redirectTo: '/famille', pathMatch: 'full' },
  { path: 'marque', component: MarqueComponent },
  {path:'famille/add',component:FamilleComponent},
  {path:'cbfils',component:CbfilsComponent},
  { path: 'famille/update/:idFamille', component: EditFamilleComponent },
  { path: 'famille', component: ViewFamilleComponent },
  { path: 'article', component: ArticleComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

