import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url;

  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7248/api/Articles';
  }

  public GetArticles(): Observable<Article[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.get<Article[]>(`${this.url}`, { headers: header }).pipe(
      map((response: any) => {
        // Map the JSON response to your model
        return response.map((item: any) => ({
          idArticle: item.idArticle,
          ddPromotion: item.ddpromotion,
          designationArticle: item.designationArticle,
          dfPromotion: item.dfpromotion,
          idFamille: item.idFamille,
          idMarque: item.idMarque,
          idStation: item.idStation,
          imageArt: item.imageArt,
          prixTTC: item.prixTtc,
          tauxPromotion: item.tauxPromotion,
          prixPromotion: item.prixPromotion,
        }));
      })
    );;
  }

  public updateArticle(article: Article): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.put<Article[]>(`${this.url}/${article.idArticle}`,article,{headers: header,}
    );
  }

  public createArticle(article: any): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Article[]>(this.url, article, {
      headers: header,
    });
  }

  public getArticleById(idArticle: string): Observable<Article> {
    let header = new HttpHeaders();
    header = header.append('Content-Type', 'application/json');
    return this.http.get<Article>(`${this.url}/${idArticle}`, {
      headers: header,
    });
  }

  public deleteArticle(articleId: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.url}/${articleId}`, {
      headers: headers,
    });
  }
}
