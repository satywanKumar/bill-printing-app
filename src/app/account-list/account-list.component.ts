import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  constructor(public billService:BillService,
              public router:Router,
              public dialog:MatDialog) { }

  account:any[] =[];
  isLoading:boolean = false;
  partyName:String;

  ngOnInit() {
    this.getAccountList();
  }

  getAccountList()
  {
    this.isLoading = true;
    this.billService.getAllAccount().subscribe(res=>{
      this.isLoading = false;
      console.log(res.body.account);
      this.account = res.body.account;
    })
  }

  delete(id)
  {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '350px',
      data:{alertMsg:'Are you sure want to delete this Account ?'}
    }); 

    dialogRef.afterClosed().subscribe(res=>{
      // //console.log(res);
      if(res)
      {
        //console.log(jobId);
        this.billService.deleteAccountById(id).subscribe(res=>{
          console.log(res);
          this.getAccountList();
        },
        err =>{
          this.dialog.open(ErrorMessageComponent,{
            width:'360px',
            data:{alertMsg:err.error}
          })
        })    
      }
    })
    
  }

  editRoute(id)
  {
    this.router.navigate(['/dashboard/edit-account',id]);
  }

  payRoute(billId)
  {
    this.router.navigate(['/dashboard/payment',billId]);
  }

}
