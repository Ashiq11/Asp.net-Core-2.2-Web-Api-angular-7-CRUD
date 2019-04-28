import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.sass']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(
    private _service:PaymentDetailService
  ) { }

  ngOnInit() {
  }

}
