import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { BillService } from '../bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrls: ['./new-bill.component.css']
})
export class NewBillComponent implements OnInit {

  constructor(public fb:FormBuilder,
              public billService:BillService,
              public router:Router) { }

  bill:FormGroup;
  total:number;
  isLoading:boolean = false;
  controls:any;


  ngOnInit() {

    this.bill =  this.fb.group({
      partyName:[''],
      partyAdd1:[''],
      partyAdd2:[''],
      city:[''],
      state:[''],
      country:[''],
      pin:[''],
      partyPanNo:[''],
      email:[''],
      phone:[''],
      taxInvoiceNo:[''],
      dateOfBill:[''],
      quantity:this.fb.array([
        this.fb.group({
          no:[0]
        })
      ]),
      totalQuantity:[0],
      rate:[''],
      gst:[''],
      gstPercent:[''],
      sgst:[''],
      sgstPercent:[''],
      shippingDetailPlace:[''],
      vehicleNo:[''],
      vehicleType:[''],
      basicValue:[],
      grossTotal:[]

    })
  }


  addquantityButtonClick()
  {
    (<FormArray>this.bill.get('quantity')).push(this.addQuantityFormGroup());
    
  }

  addQuantityFormGroup():FormGroup
  {
    return this.fb.group({
      no:['']
    })
  }

  removeFormGroup(i:number)
  {
    (<FormArray>this.bill.get('quantity')).removeAt(i);
    this.totalQunatity();
  }

 

  totalQunatity()
  {
    var q = <FormArray>this.bill.get('quantity').value;
    // console.log(q.length);
    this.total = 0
    for(var i=0 ; i<q.length;i++)
    {
      
      console.log(q[i].no);
      this.total = this.total + q[i].no;
      console.log('total',this.total);
    }
  }

  saveBill()
  {
    this.isLoading = true;
    this.bill.patchValue({totalQuantity:this.total});
    this.bill.patchValue({basicValue:this.total * this.bill.get('rate').value});
    this.bill.patchValue({gst:this.bill.get('basicValue').value * this.bill.get('gstPercent').value/100});
    this.bill.patchValue({dateOfBill:Date()});
    this.bill.patchValue({sgst:this.bill.get('basicValue').value * this.bill.get('sgstPercent').value/100});
    this.bill.patchValue({grossTotal:this.bill.get('basicValue').value + this.bill.get('gst').value + this.bill.get('sgst').value});


    console.log(this.bill.value);
    this.billService.newBill(this.bill.value).subscribe(res=>{
      this.isLoading = false;
      this.router.navigate(['/dashboard/bill-list'])
      console.log(res);
    })
  }

  getControls()
  {
    return (<FormArray>this.bill.get('quantity')).controls;
  }

}
