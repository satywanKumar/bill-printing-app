import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: ['./bill-detail.component.css']
})
export class BillDetailComponent implements OnInit {

  constructor(public activatedRoute:ActivatedRoute,
              public billService:BillService) { }
  billId:String;
  bill:any = {};
  isLoading:boolean = false;

  ngOnInit() {
    this.billId = this.activatedRoute.snapshot.params['billId'];
    console.log(this.billId);
    this.getBillById();
  }

  getBillById()
  {
    this.isLoading = true;
    this.billService.getBillById(this.billId).subscribe(res=>{
      this.isLoading = false;
      this.bill = res.body.bill;
      console.log(this.bill);
    })
  }

  print(id)
  {
    //console.log(id);
    var printContent = document.getElementById(id).innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    location.reload();
  }

}
