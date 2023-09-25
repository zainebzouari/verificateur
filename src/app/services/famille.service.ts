import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { Famille } from '../models/famille';

@Injectable({
  providedIn: 'root'
})
export class FamilleService {
  private url;
  find: any;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7248/api/Familles";
  }

 // public GetMarques(): Observable<marque[]> {
  //return this.http.get<marque[]>(`${environment.apiUrl}/${this.url}`);
  //}
  public getFamilles(): Observable<Famille[]> {
    let header = new HttpHeaders();
   header.append('Content-Type','applications/json');
   return this.http.get<Famille[]>(`${this.url}`,{headers:header});
   }
   public updateFamille(idFamille:string,famille: Famille): Observable<Famille> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Famille>(`${this.url}/${famille.idFamille}`, famille, { headers: headers });
  }
    public createFamille(famille: Famille): Observable<Famille[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Famille[]>(`${this.url}`, famille, { headers: header });
   }
   public deleteFamille(idFamille: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<any>(`${this.url}/${idFamille}`, { headers: headers });
  }
  
    getFamilleById(idFamille: string): Observable<Famille[]>{
    return this.http.get<Famille[]>(`${this.url}user/${idFamille}`)
  }
}



        