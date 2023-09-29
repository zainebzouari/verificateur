import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditMarqueComponent } from './edit-marque/edit-marque.component';
import { FamilleComponent } from './famille/famille.component';
import { EditFamilleComponent } from './edit-famille/edit-famille.component';
import { CbfilsComponent } from './cbfils/cbfils.component';
import { ViewFamilleComponent } from './viewfamille/viewfamille.component';
import { ArticleComponent } from './article/article.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedDatepickerComponent } from './shared-datepicker/shared-datepicker.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { StationComponent } from './station/station.component';
import { UploadComponent } from './upload/upload.component';
import { AboutComponent } from './about/about.component';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './components/footer/footer.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { ContactComponent } from './contact/contact.component';
import { MarqueComponent } from './marque/marque.component';
import { EditstationComponent } from './editstation/editstation.component';
import { LoginComponent } from './login/login.component';

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
    SharedDatepickerComponent,
    HomeComponent,
    StationComponent,
    UploadComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    EditstationComponent,
    LoginComponent,
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
    MatSelectModule,
    MatPaginatorModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    FileUploadModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule,
    ToolbarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
