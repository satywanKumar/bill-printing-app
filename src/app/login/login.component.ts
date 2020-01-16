import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router,
              public dialog:MatDialog,
              public billService:BillService) { }
  password='';
  user={
    userName:'snt123@gmail.com',
    password:''
  }

  ngOnInit() {
  }

  login()
  {
    this.user.password = this.password;
    console.log(this.user);
    this.billService.signIn(this.user).subscribe(res=>{
      // console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['/dashboard'])
    },
    (err)=>{
      console.log(err);
      this.dialog.open(ErrorMessageComponent,{
            width:'350px',
            data:{alertMsg:err.error.msg}
          })
    })
    // if(this.password == 'snt@147')
    // {
    //   this.router.navigate(['/dashboard'])
    // }
    // else{
    //   this.dialog.open(ErrorMessageComponent,{
    //     width:'350px',
    //     data:{alerMsg:"something is wrong! please try again"}
    //   })
    // }
  }

}
