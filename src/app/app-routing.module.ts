import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBillComponent } from './new-bill/new-bill.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaymentComponent } from './payment/payment.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AuthGuard } from './auth.guard';

const routes:Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:LoginComponent},

  {path:'dashboard',component:NavBarComponent,canActivate:[AuthGuard],children:[
    {path:'',component:BillListComponent},
    {path:'new-bill',component:NewBillComponent},
    {path:'bill-list',component:BillListComponent},
    {path:'bill-detail/:billId',component:BillDetailComponent},
    {path:'bill-list',component:BillListComponent},
    {path:'payment/:id',component:PaymentComponent},
    {path:'add-account',component:AddAccountComponent},
    {path:'edit-account/:id',component:AddAccountComponent},
    {path:'account-list',component:AccountListComponent}
  ]},
 
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
