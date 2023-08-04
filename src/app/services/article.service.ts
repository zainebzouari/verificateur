import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private url;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7021/api/Articles";
  }

 // public GetMarques(): Observable<marque[]> {
  //return this.http.get<marque[]>(`${environment.apiUrl}/${this.url}`);
  //}
    public GetArticles(): Observable<Article[]> {
    let header = new HttpHeaders();
   header.append('Content-Type','applications/json');
   return this.http.get<Article[]>(`${this.url}`,{headers:header});
  }
  public updateArticle(Article: any): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.put<Article[]>(`${this.url}/${Article.id}`, Article, { headers: header });
    }
    public createArticle(article: any): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Article[]>(`${this.url}`, article, { headers: header });
}
  public getArticleById(idArticle: String): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.get<Article[]>(`${this.url}/${idArticle}`, { headers: header });
  }
  public deleteArticle(article: Article): Observable<any> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.url}/${article}`, { headers: header });
  }
}