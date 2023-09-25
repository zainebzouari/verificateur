import { Component, OnInit } from '@angular/core';
import { CbfilsService } from '../services/cbfils.service';
import { Cbfils } from '../models/cbfils';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-cbfils',
  templateUrl: './cbfils.component.html',
  styleUrls: ['./cbfils.component.css']
})
export class CbfilsComponent implements OnInit {
  public cbfilss: Cbfils[] = [];
  public article: Article[] = [];
  cbfils: Cbfils = {
    idFils: '',
    idArticle: ''
  };

  constructor(private route: Router, private cbfilsService: CbfilsService,private articleService: ArticleService) {}

  ngOnInit(): void {
    this.GetCbfils();
    this.GetArticles();
  }

  onSubmit() {
    if (this.cbfils.idFils!==""){
        this.cbfilsService.createCbfils(this.cbfils).subscribe(result => {
       this.GetCbfils();
       this.cbfils = {
        idFils: '',
        idArticle: ''
      }
      }  )
    }else {
      this.updateCbfils(this.cbfils);
    }
  }

  GetCbfils() {
    this.cbfilsService.GetCbfils().subscribe((result: Cbfils[]) => {
      this.cbfilss = result;
      console.log(result);
    });
  }
  GetArticles() {
    this.articleService.GetArticles().subscribe((result: Article[]) => {
      this.article = result;
      console.log(result);
    });
  }
  
  deleteCbfils(cbfils:Cbfils) {
    this.cbfilsService.deleteCbfils(cbfils).subscribe(result => {
      this.GetCbfils();
    });
  }
 populateForm(cbfils:Cbfils){
  this.cbfils=cbfils;
 }
 updateCbfils(cbfils:Cbfils) {
   this.cbfilsService.updateCbfils(cbfils).subscribe(result => {
    this.GetCbfils();
  });
}
}




  //deleteCbfils() {
    //this.cbfilsService.deleteCbfils(this.newMarque).subscribe((result: Cbfils[]) => {
      //this.Marques = result;
      //console.log(this.Marques);
    //});
 // }
  
  //createMarque() {
   // this.marqueService.createMarque(this.newMarque).subscribe((result: Marque[]) => {
      //this.Marques = result;
      //console.log(this.Marques);
    //});
  //}

  //updateMarque() {
    //this.marqueService.updateMarque(this.newMarque).subscribe((result: Marque[]) => {
      //this.Marques = result;
      //console.log(this.Marques);
    //});
  //}
