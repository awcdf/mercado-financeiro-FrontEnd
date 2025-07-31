import { ApiService } from './../api-service/api-service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcoesMercadoService {
  private readonly API_URL = 'http://localhost:8000/api';

  constructor(private readonly apiService: ApiService) {}

  getPrecos(): Observable<any> {
    return this.apiService.get(`${this.API_URL}/precos`);
  }

  getHistorico(): Observable<any> {
    return this.apiService.get(`${this.API_URL}/historico`);
  }

  getIndicadores(): Observable<any> {
    return this.apiService.get(`${this.API_URL}/indicadores`);
  }
}
