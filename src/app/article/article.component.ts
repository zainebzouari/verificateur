import {
  Component,
  Input,
  Output,
  EventEmitter,
  Renderer2,
} from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from '../models/article';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild, ElementRef } from '@angular/core';
import { FamilleService } from '../services/famille.service';
import { MarqueService } from '../services/marque.service';

import { StationService } from '../services/station.service';
import { Station } from '../models/station';
import { Famille } from '../models/famille';
import { Marque } from '../models/marque';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  @Input() article?: Article;
  @ViewChild('filterInput') filterInput!: ElementRef;
  mm!: Article;
  public response!: { filePath: '' };
  data: any;
  @Output() articleUpdated = new EventEmitter<Article[]>();
  public Articles: Article[] = [];
  public Marques: Marque[] = [];
  public Familles: Famille[] = [];
  public Stations: Station[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
  displayedItemCount: number = 0;
  selectAllChecked: boolean = false;
  idArticle: string | null = null;
  selectedImage: string | null = null;
  selectedItems: Article[] = [];
  imageBase64: string | null = null;
  formData = new FormData();
  dataSource = new MatTableDataSource<Article>(this.Articles);
  selected: boolean = false;
  showForm: boolean = true;
  deleteConfirmationVisible = true;

  constructor(
    private route: Router,
    private articleService: ArticleService,
    private familleService: FamilleService,
    private marqueService: MarqueService,
    private stationService: StationService,
    private renderer: Renderer2
  ) {}

  Article = {
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
    prixPromotion: '',
  };

  mygroup = new FormGroup({
    idArticle: new FormControl(),
    ddPromotion: new FormControl(),
    designationArticle: new FormControl(),
    dfPromotion: new FormControl(),
    idFamille: new FormControl(),
    idMarque: new FormControl(),
    idStation: new FormControl(),
    imageArt: new FormControl(),
    prixTTC: new FormControl(),
    tauxPromotion: new FormControl(),
    prixPromotion: new FormControl(),
  });

  ngOnInit(): void {
    this.GetArticles();
    this.GetMarques();
    this.getFamilles();
    this.getStations();
    this.dataSource = new MatTableDataSource<Article>(this.Articles);
  }

  GetArticles() {
    this.articleService.GetArticles().subscribe((result: Article[]) => {
      console.log(result);
      this.Articles = result;
      this.totalItems = this.Articles.length;
    });
  }
  GetMarques() {
    this.marqueService.GetMarques().subscribe((result: Marque[]) => {
      this.Marques = result;
    });
  }
  getFamilles() {
    this.familleService.getFamilles().subscribe((result: Famille[]) => {
      this.Familles = result;
    });
  }
  getStations() {
    this.stationService.getStations().subscribe((result: Station[]) => {
      this.Stations = result;
    });
  }

  createArticleFromHtml() {
    this.articleService
      .createArticle(this.mygroup.value)
      .subscribe((result) => {
        this.showForm = false;
        const newArticle: Article = {
          idArticle: '',
          ddPromotion: '',
          designationArticle: '',
          dfPromotion: '',
          idFamille: '',
          idMarque: '',
          idStation: '',
          imageArt: this.response.filePath, // Use this.response if it's correctly set
          prixTTC: '',
          tauxPromotion: '',
          prixPromotion: '',
        };

        // Push the new article to the Articles array
        this.Articles.push(newArticle);

        // Optionally, you can reset the form or perform any other necessary actions
        this.mygroup.reset();

        // Refresh the list of articles
        this.GetArticles();
      });
  }

  handleDeleteArticle(articleId: string) {
    this.idArticle = articleId;
  }

  deleteArticle() {
    this.articleService.deleteArticle(this.idArticle!).subscribe((result) => {
      this.deleteConfirmationVisible = false;
      this.GetArticles();
    });
  }

  submit() {
    this.data = this.mygroup.value;
    this.articleService.updateArticle(this.data).subscribe((data) => {});
    this.showForm = false;
  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedItemCount();
  }

  onPageSizeChange(event: any) {
    // Mettez à jour itemsPerPage avec la valeur sélectionnée
    this.itemsPerPage = event.pageSize;
    // Réinitialisez currentPage à 1 lorsque la taille de la page change
    this.currentPage = 1;
    this.updateDisplayedItemCount();
  }

  updateDisplayedItemCount() {
    this.displayedItemCount = Math.min(
      this.currentPage * this.itemsPerPage,
      this.totalItems
    );
  }

  getPaginatedItems(): Article[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = Math.min(startIndex + this.itemsPerPage, this.totalItems);
    return this.Articles.slice(startIndex, endIndex);
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  getPaginationArray(): number[] {
    return Array(this.getTotalPages())
      .fill(0)
      .map((x, i) => i + 1);
  }

  toggleArticleSelection(article: Article) {
    article.selected = !article.selected;
  }

  deleteSelectedArticles() {
    const selectedArticles = this.Articles.filter(
      (article) => article.selected
    );

    if (selectedArticles.length === 0) {
      console.log('No items selected.');
      return;
    }

    selectedArticles.forEach((article) => {
      this.articleService.deleteArticle(article.idArticle!).subscribe(() => {
        console.log(
          `Article with ID ${article.idArticle} deleted successfully.`
        );
        // Remove the deleted article from the local array
        this.Articles = this.Articles.filter(
          (a) => a.idArticle !== article.idArticle
        );
      });
    });

    this.selectAllChecked = false;
  }

  refreshTable() {
    this.GetArticles();
  }

  reloadPage() {
    this.renderer.setAttribute(document.body, 'reload', 'true');
    window.location.reload();
  }

  openEditForm(article: Article) {
    this.mygroup.patchValue(article);
  }

  uploadFinished = (event: any) => {
    this.response = event;
  };

  public createImgPath = (imagePath: string) => {
    // change this when need it
    return `https://localhost:7248/${imagePath}`;
  };

  applyFilter() {
    const filterValue = (this.filterInput.nativeElement as HTMLInputElement)
      .value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // Assurez-vous de lier le dataSource à la source de données filtrée
    // Cela vous permettra d'appliquer le filtre au tableau.
    this.dataSource.filter = filterValue;
  }
}
