import { Component } from '@angular/core';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent {
  show:boolean=false
  cartTotal: any
  
  constructor() { }
  ngOnInit() {

    this.cartTotal =
      JSON.parse(localStorage.getItem('cart total') as any) || [];
    console.log('car total', this.cartTotal)

  }

  onLoadPaymentData =(event:Event):void=> {
   const eventDetail= event as CustomEvent<google.payments.api.PaymentData>;
   console.log('Load Payment Data',eventDetail.detail)
  }
toggle(){
  this.show=true
}

  onError=(event:ErrorEvent):void =>{
    console.log('error', event.error)
    
  }
  
  


 

 

  


}




