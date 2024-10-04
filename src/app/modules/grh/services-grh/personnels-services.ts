import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/services/api';
import { Personnel } from '../models-grh/Personnel';

@Injectable({
  providedIn: 'root'
})
export class GrhService {
  apiURL = api.url;

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  personnel: Personnel[] = [];

  lireJson(): Observable<any> {
    return this.http.get('../../../assets/personnel.json');

  }

  getAllPersonnels(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(`${this.apiURL}/personnel`);
  }

  getPersonnelById(personnelId: number): Observable<Personnel> {
    if (personnelId === undefined) {
      throw new Error('Personnel not found!');
    } else {
      return this.http.get<Personnel>(`${this.apiURL}/document/${personnelId}`);
    }
  }

  ajouterPersonnel(annot: any): Observable<any> {
    return this.http.post(this.apiURL + '/per', annot, this.httpOptions);
  }

  supprimerPersonnel(annot: any): Observable<any> {
    return this.http.delete(`${this.apiURL}/personnel/${annot.id}`, this.httpOptions);
  }

  modifierPersonnel(annot: any): Observable<any> {
    return this.http.put(this.apiURL + '/personnel', annot, this.httpOptions);
  }
}
