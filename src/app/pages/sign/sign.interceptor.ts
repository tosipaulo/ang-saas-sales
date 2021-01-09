import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { SignService } from "./sign.service";

@Injectable()
export class SignInterceptor implements HttpInterceptor {

  constructor(private signService: SignService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      })

      return next.handle(authReq)
        .pipe(
          catchError((error) => {
            if(error instanceof HttpErrorResponse) {
              if(error.status === 401) {
                this.signService.logout();
                this.router.navigateByUrl('/acesso/login');
              }
            }
            return throwError(error);
          })
        )
    }
    return next.handle(req);
  }
}
