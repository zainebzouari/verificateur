import { Component, ElementRef, Renderer2 } from '@angular/core';
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
  message: string = '';

  constructor(
    private articleService: ArticleService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  updateInputStyle(message: string) {
    const inputElement = this.el.nativeElement.querySelector('#productId');
    if (message !== '') {
      this.renderer.addClass(inputElement, 'input-border-error');
    } else {
      this.renderer.removeClass(inputElement, 'input-border-error');
    }
  }

  async checkPrice() {
    const enteredProductId = this.productId;

    if (enteredProductId.length === 0) {
      this.searched = false;
      this.message = 'Please enter a product id';
      this.updateInputStyle(this.message);
      return;
    }

    this.message = '';

    try {
      const response = await this.articleService
        .getArticleById(this.productId)
        .toPromise();

      if (response) {
        this.result = {
          designationArticle: response.designationArticle,
          tauxPromotion: response.tauxPromotion,
          prixPromotion: response.prixPromotion,
          imageArt: response.imageArt,
        };
        this.searched = true;
        this.updateInputStyle(this.message);
      }
    } catch (error: any) {
      if (error.status === 404) {
        this.searched = true;
        this.message = `Aucun résultat trouvé pour l'id: ${this.productId}`;
        this.updateInputStyle(this.message)
      } else {
        console.error('An error occurred:', error);
        this.searched = true;
        this.message = `An error occurred`;
        this.updateInputStyle(this.message)
      }
    }
  }
}
