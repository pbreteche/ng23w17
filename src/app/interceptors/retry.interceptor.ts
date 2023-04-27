import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  apiKey = '1234abcdef';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({ setHeaders: { 'X-API-KEY': this.apiKey } })

    return next.handle(req).pipe(retry(5));
  }
}
