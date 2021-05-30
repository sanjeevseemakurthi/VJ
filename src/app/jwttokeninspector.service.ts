import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwttokeninspectorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let jwt = JSON.parse(localStorage.getItem('jwt'));
    
    if (jwt) {
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer'+' '+jwt.token
             }
        });
    }
    return next.handle(request);
}
}
