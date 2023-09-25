import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productId: string = '';
  result: any;
  searched: boolean = false;

  constructor(private articleService: ArticleService) {}

  checkPrice() {
    // Appel de getArticleById pour obtenir les informations de l'article par ID
    this.articleService.getArticleById(this.productId).subscribe((response) => {
      if (response) {
        // Mettre à jour les valeurs de result avec la réponse
        this.result = {
          designationArticle: response.designationArticle,
          prixPromotion: response.prixPromotion,
          imageArt: response.imageArt,
        };
        this.searched = true;
      } else {
        console.log("Aucun résultat trouvé pour l'ID " + this.productId);
      }
    });
  }
}
