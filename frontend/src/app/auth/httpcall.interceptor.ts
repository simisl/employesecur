import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpcallInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.includes('list')){
      let token = JSON.parse(localStorage.getItem('token') || '[]')
      let httpReq = request.clone({
        setHeaders: { Authorization: `${token}`}
      })

      console.log('new',httpReq)
      return next.handle(httpReq)
    }
    else{
      return next.handle(request);
    }

  }
}
