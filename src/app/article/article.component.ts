import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article: Article[] = [];
  articles: Article = {
    idArticle: '',
    ddPromotion: '',
    designationArticle: '',
    dfPromotion: '',
    idFamille: '',
    idMarque: '',
    idStation: '',
    imageArt: '',
    prixTTC: '',
    tauxPromotion: '',
    prixPromotion: ''
  };
  currentPage: number = 1;
  itemsPerPage: number = 2;
  totalItems: number = 0;
  selectAllChecked: boolean = false;
  
 
  constructor(private route: Router, private articleService: ArticleService) {}

  ngOnInit(): void {
    this.GetArticles();
  }

  GetArticles() {
    this.articleService.GetArticles().subscribe((result: Article[]) => {
      this.article = result;
      this.totalItems = this.article.length;
    });
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article).subscribe(result => {
      this.GetArticles();
    });
  }

  populateForm(article: Article) {
    this.articles = article;
  }

  updateArticle(article: Article) {
    this.articleService.updateArticle(article).subscribe(result => {
      this.GetArticles();
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }

  getPaginatedItems(): Article[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
    return this.article.slice(startIndex, endIndex);
  }

  createArticle() {
    this.articleService.createArticle(this.articles).subscribe(result => {
      this.GetArticles();
    });
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    return Array(this.getTotalPages()).fill(0).map((x, i) => i + 1);
  }

  toggleSelectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    this.article.forEach(item => (item.selected = this.selectAllChecked));
  }
  
  toggleCheckbox(item: Article) {
    item.selected = !item.selected;
    this.selectAllChecked = this.article.every(item => item.selected);
  }

  onFileSelected(event: any) {
    // Handle file selection here
  }
}




