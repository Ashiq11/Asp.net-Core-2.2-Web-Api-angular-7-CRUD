import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from '../shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-or-edit-payment-detail',
  templateUrl: './create-or-edit-payment-detail.component.html',
  styleUrls: ['./create-or-edit-payment-detail.component.sass']
})
export class CreateOrEditPaymentDetailComponent implements OnInit {

  constructor(
    private service:PaymentDetailService,
    private toastr: ToastrService
    ) { 

  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
     form.resetForm();
    this.service.formData ={
      PMId:0,
      CardOwnerName:'',
      CardNumber:'',
      ExpirationDate:'',
      CVV:''
    }
  }
  onSubmit(form : NgForm){
    if(this.service.formData.PMId==0)
    this.insertRecord(form);
   else
   this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postPaymentDetail().subscribe(
      result=>{
        this.resetForm(form);
        this.toastr.success('Save Successfully','Payment Detail Register');
        this.service.refreshList();
      },
      error=>{
        console.log(error);
        this.toastr.error('error to submit','Payment Detail Register');
      }
    )
  }
  updateRecord(form:NgForm){
    this.service.putPaymentDetail().subscribe(
      result=>{
        this.resetForm(form);
        this.toastr.info('Update Successfully','Payment Detail Register');
        this.service.refreshList();
      },
      error=>{
        console.log(error);
        this.toastr.error('error to submit','Payment Detail Register');
      }
    )
  }

}
