import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'
import { BillService } from './bill.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }
  intercept(req, next) {
    let billService = this.injector.get(BillService)
    let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'Bearer ' + billService.getToken())
      }
    )
    return next.handle(tokenizedReq)
  }
}
