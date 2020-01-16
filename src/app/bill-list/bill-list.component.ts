import { Component, OnInit } from '@angular/core';
import { BillService } from '../bill.service';
import { MatDialog } from '@angular/material';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  constructor(public billService:BillService,
              public dialog:MatDialog,
              public router:Router) { }
  bills:any[] = [];
  isLoading:boolean = false;
  partyName:String;

  ngOnInit() {
    this.getAllBill();
  }

  getAllBill()
  {
    this.isLoading = true;
    this.billService.getAllBill().subscribe(res=>{
      this.isLoading = false;
      console.log(res.body.bill);
      this.bills = res.body.bill;
    })
  }

  delete(billId)
  {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '350px',
      data:{alertMsg:'Are you sure want to delete this Bill ?'}
    }); 

    dialogRef.afterClosed().subscribe(res=>{
      // //console.log(res);
      if(res)
      {
        //console.log(jobId);
        this.billService.deleteBill(billId).subscribe(res=>{
          console.log(res);
          this.getAllBill();
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

  billDetailRoute(billId)
  {
    this.router.navigate(['/dashboard/bill-detail',billId]);
  }

 

}
