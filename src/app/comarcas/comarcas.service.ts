import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComarcasService {
  private readonly serviceUrl =
    'https://api.idescat.cat/pob/v1/cerca.json?p=tipus/com';

  constructor(private http: HttpClient) {}

  getComarcas(): Observable<any> {
    return this.http.get(this.serviceUrl);
  }
}
