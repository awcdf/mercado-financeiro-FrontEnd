import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly cache = new Map<string, Observable<any>>();

  constructor(private readonly http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    console.log('[API-SERVICE] Chamando endpoint:', url);

    const observable = this.http.get<T>(url).pipe(
      shareReplay(1)
    );

    this.cache.set(url, observable);
    return observable;
  }

  clearCache(): void {
    this.cache.clear();
  }

  invalidate(key: string): void {
    this.cache.delete(key);
  }

}
