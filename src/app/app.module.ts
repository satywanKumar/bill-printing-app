import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewBillComponent } from './new-bill/new-bill.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillDetailComponent } from './bill-detail/bill-detail.component';
import { ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { Route} from '@angular/router'

// material module
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule

} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './filter.pipe';
import { AccountListComponent } from './account-list/account-list.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountPipe } from './account.pipe';
import { TokenInterceptorService } from './token-interceptor.service';
import { BillService } from './bill.service';


@NgModule({
  declarations: [
    AppComponent,
    NewBillComponent,
    BillListComponent,
    BillDetailComponent,
    NavBarComponent,
    ConfirmDeleteComponent,
    ErrorMessageComponent,
    LoginComponent,
    FilterPipe,
    AccountListComponent,
    AddAccountComponent,
    PaymentComponent,
    AccountPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,

    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [
    BillService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmDeleteComponent,ErrorMessageComponent]
})
export class AppModule { }
