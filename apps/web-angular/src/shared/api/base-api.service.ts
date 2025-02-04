import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService {
  protected readonly httpClient = inject(HttpClient);
  protected readonly baseUrl = 'http://localhost:8080';
}
