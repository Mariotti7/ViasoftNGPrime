import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotaFiscalEletronica } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<NotaFiscalEletronica[]>{
    return this.http.get<NotaFiscalEletronica[]>('http://localhost:8080/api/nf');
  }

  saveNota(notaFiscal: NotaFiscalEletronica): Observable<NotaFiscalEletronica>{
    return this.http.post<NotaFiscalEletronica>('http://localhost:8080/api/nf', notaFiscal);
  }

}
