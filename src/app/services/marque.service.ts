import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from '../models/marque';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MarqueService {
  private url;

  constructor(private http: HttpClient) {
    this.url = "https://localhost:7021/api/Marques";
  }

 // public GetMarques(): Observable<marque[]> {
  //return this.http.get<marque[]>(`${environment.apiUrl}/${this.url}`);
  //}
    public GetMarques(): Observable<Marque[]> {
    let header = new HttpHeaders();
   header.append('Content-Type','applications/json');
   return this.http.get<Marque[]>(`${this.url}`,{headers:header});
    }
    public updateMarque(marque: any): Observable<any> {
    let header = new HttpHeaders();
   header.append('Content-Type', 'application/json');
    return this.http.put<Marque[]>(`${this.url}/${marque.idMarque}`, marque, { headers: header });
   }
    public createMarque(marque: Marque): Observable<Marque[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<Marque[]>(`${this.url}`, marque, { headers: header });
    }
    public deleteMarque(marque: Marque): Observable<Marque[]> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.delete<Marque[]>(`${this.url}/${marque.idMarque}`, { headers: header });
  }
        

 
     
  
  //public getMarqueById(idMarque: string): Observable<any> {
   // return this.http.get(`${environment.apiUrl}/${this.url}/${idMarque}`);
  //}

 // public updateMarque(idMarque: string, marque: marque): Observable<marque> {
    //return this.http.put<marque>(`${environment.apiUrl}/${this.url}/${idMarque}`, marque);
  //}

  //public createMarque(marque: any): Observable<any> {
    //return this.http.post(`${environment.apiUrl}/${this.url}`, marque);
  //}

  //public deleteMarque(idMarque: string): Observable<any> {
   // return this.http.delete(`${environment.apiUrl}/${this.url}/${idMarque}`);
  //}
}


  

  //public GetMarques(): Observable<marque[]> {
   // let header = new HttpHeaders();
    //header.append('Content-Type','applications/json');
    //return this.http.get<marque[]>(`${this.url}`,{headers:header});
  //} 

  
  //public createMarque(IdMarque: marque, DesignationMarque: marque): Observable<marque[]> {
   // return this.http.post<marque[]>(`${environment.apiUrl}/${this.url}`, { IdMarque, DesignationMarque });
  //}


  //public deleteMarque(IdMarque: marque, DesignationMarque: marque): Observable<marque[]> {
    //return this.http.delete<marque[]>(`${environment.apiUrl}/${this.url}`);
  //} 
 