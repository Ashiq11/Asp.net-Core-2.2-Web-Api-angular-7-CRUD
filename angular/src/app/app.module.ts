import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './main/payment-details/payment-details.component';
import { CreateOrEditPaymentDetailComponent } from './main/payment-details/create-or-edit-payment-detail.component';
import { ViewPaymentDetailComponent } from './main/payment-details/view-payment-detail.component';
import { PaymentDetailService } from './main/shared/payment-detail.service';

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    CreateOrEditPaymentDetailComponent,
    ViewPaymentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
