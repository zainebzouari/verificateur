import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarqueComponent } from './components/marque.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditMarqueComponent } from './edit-marque/edit-marque.component';
import { FamilleComponent } from './famille/famille.component';
import { EditFamilleComponent } from './edit-famille/edit-famille.component';
import { CbfilsComponent } from './cbfils/cbfils.component';
import { ViewFamilleComponent } from './viewfamille/viewfamille.component';
import { ArticleComponent } from './article/article.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MarqueComponent,
    NavbarComponent,
    EditMarqueComponent,
    FamilleComponent,
    EditFamilleComponent,
    CbfilsComponent,
    ViewFamilleComponent,
    ArticleComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
   // MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

