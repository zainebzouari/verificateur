import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private url;

  // private imageUrl;

  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7248/api/Articles';
    // this.imageUrl = 'https://localhost:7021/api/fileupload';
  }

  // public GetMarques(): Observable<marque[]> {
  //return this.http.get<marque[]>(`${environment.apiUrl}/${this.url}`);
  //}
  public GetArticles(): Observable<Article[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.http.get<Article[]>(`${this.url}`, { headers: header });
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
