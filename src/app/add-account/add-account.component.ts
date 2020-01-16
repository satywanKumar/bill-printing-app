import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  constructor(public billService:BillService ,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }


  newAccount:FormGroup;
  isLoading:boolean = false;
  accountId:String;

  ngOnInit() {

    this.newAccount = new FormGroup({
      _id:new FormControl(),
      partyName: new FormControl(),
      phone:new FormControl(),
      paid:new FormControl(),
      total:new FormControl(),
      lastPay:new FormControl(),
      lastPayDate:new FormControl()
    })

    this.accountId = this.activatedRoute.snapshot.params['id'];
    if(this.accountId != null)
    {
      console.log(this.accountId);
      this.billService.getAccountById(this.accountId).subscribe(res=>{
        console.log(res.body.account)
        this.newAccount.setValue(res.body.account)
      })
    }
  }


  // add new account
  save()
  {
    this.isLoading = true;

    if(this.accountId != null){
      this.billService.updateAccount(this.newAccount.value,this.accountId).subscribe(res=>{
        this.isLoading = true;
        console.log(res);
        this.router.navigate(['/dashboard/account-list'])
      })
    }
    else{
      this.billService.addAccount(this.newAccount.value).subscribe(res=>{
        this.isLoading = true;
        console.log(res);
        this.router.navigate(['/dashboard/account-list'])
      })
    }
  }

}
