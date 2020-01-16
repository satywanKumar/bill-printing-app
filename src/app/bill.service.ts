import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse,HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(public http:HttpClient) { }

  public url = 'https://ss-bricks-web-api.herokuapp.com/bill';
  public baseUrl = 'https://ss-bricks-web-api.herokuapp.com';

  newBill(data){
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.post<any>(this.url,data,options);
  }

  getAllBill()
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.get<any>(this.url,options);
  }

  getBillById(billId)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.get<any>(this.url + '/' + billId,options);
  }

  getCountBill()
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.get<any>(this.url +'/get/count',options);
  }

  deleteBill(billId)
  {
    return this.http.delete<any>(this.url + '/' + billId);
  }

  getAllAccount()
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.get<any>(this.baseUrl +'/ss-account/',options);
  }

  getAccountById(id)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.get<any>(this.baseUrl +'/ss-account/'+ id ,options);
  }

  addAccount(data)
  {
    const headers = new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json','Access-Control-Allow-Origin':'*', });
    const options = {
      headers: headers,  
      observe: "response" as 'body', // to display the full response & as 'body' for type cast
              "responseType?" : "json"       
    };

    return this.http.post<any>(this.baseUrl + '/ss-account',data,options);
  }

  updateAccount(data,id)
  {
    return this.http.put<any>(this.baseUrl+'/ss-account/'+id,data)
  }

  payment(data,id)
  {
    return this.http.put<any>(this.baseUrl+'/ss-account/pay/'+id,data)

  }

  deleteAccountById(id)
  {
    return this.http.delete<any>(this.baseUrl + '/ss-account/' +id);
  }

  signIn(user)
  {
    return this.http.post<any>(this.baseUrl + '/user/login',user);
  }

  isloggedIn() {
    if(localStorage.getItem('token') ==null )
     return false;
    else
     return true;
  }
  getToken()
  {
    return localStorage.getItem('token');
  }

}
