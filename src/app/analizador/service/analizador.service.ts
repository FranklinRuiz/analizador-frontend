import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AnalizadorService {

  url: string = "http://localhost:8080";

  constructor(
    protected http: HttpClient
  ) { }

  lexico(texto:any): Observable<any> {
    return this.http.post(`${this.url}/lexical-analyzer`, texto,{ headers: Headers() });
  }

  sintactico(texto:any): Observable<any> {
    return this.http.post(`${this.url}/syntactic-analyzer`, texto, { headers: Headers() });
  }

 
}

export function Headers(isJson = true): HttpHeaders {
  let headers = new HttpHeaders();
  if (isJson) {
    headers = headers.set('Content-Type', 'application/json');
  }
  return headers;
}
