import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-create-or-edit-payment-detail',
  templateUrl: './create-or-edit-payment-detail.component.html',
  styleUrls: ['./create-or-edit-payment-detail.component.sass']
})
export class CreateOrEditPaymentDetailComponent implements OnInit {

  constructor(private service:PaymentDetailService) { 

  }

  ngOnInit() {
  }

}
