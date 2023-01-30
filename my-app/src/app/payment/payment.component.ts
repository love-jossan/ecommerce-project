import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  hide: boolean = false
  show: boolean = false

  toggle() {

    this.hide = true;
    this.show=false;
  }
  // tooggle() {
  //   this.hide = false;
  //   this.show=false;
  // }
  // googlePay(){
  //   this.show=true;
  //   this.hide=false;
  // }
  onLoadPaymentData =(event:Event):void=> {
    const eventDetail= event as CustomEvent<google.payments.api.PaymentData>;
    console.log('Load Payment Data',eventDetail.detail)
   }
  

}
