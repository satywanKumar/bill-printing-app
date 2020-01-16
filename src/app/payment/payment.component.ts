import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(public billService:BillService,
    public activatedRoute:ActivatedRoute) { }

  account:any = {};
  accountId:String;
  data = {
    paid:Number,
    lastPay:Number,
    lastPayDate: new Date().toString()
  }
  paid:any;
  isFullPaid:boolean = false;

  ngOnInit() {
    this.accountId = this.activatedRoute.snapshot.params['id'];
    this.getAccount();
  }

  // get all student account detail
  getAccount(){
    this.billService.getAccountById(this.accountId).subscribe(res=>{
      console.log(res.body.account);
      this.account = res.body.account;
      this.paid = res.body.account.paid;
      if(this.account.total > this.account.paid)
      {
        this.isFullPaid = true;
      }
      else{
        this.isFullPaid = false;
      }
    })
  }

  // pay
  pay()
  {
    this.data.paid = this.paid + this.data.lastPay;
    // this.data.lastPay = this.data.lastPay;
    console.log(this.data)
    this.billService.payment(this.data,this.accountId).subscribe(res=>{
      console.log(res.body);
      this.getAccount();
      this.data.lastPay = null;
    })
  }


}
