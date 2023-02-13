import { Component } from '@angular/core';
import { FormGroup ,FormControl,Validators, ReactiveFormsModule, AbstractControl} from '@angular/forms';
import { ShoopingService } from '../shooping.service';

@Component({
  selector: 'app-chekout',
  templateUrl: './chekout.component.html',
  styleUrls: ['./chekout.component.css']
})
export class ChekoutComponent {

  hide: boolean = true;
  cartTotal: any

  constructor(private service:ShoopingService) { }
  ngOnInit() {
    // this.cartTotal =
    //   JSON.parse(localStorage.getItem('cart total') as any) || [];
    // console.log('car total', this.cartTotal)

  }
  get input(): { [key: string]: AbstractControl } {
    return this.orderForm.controls
  }
  // get name() { return this.orderForm.get('name'); }
  // get email() { return this.orderForm.get('email'); }
  orderForm = new FormGroup({
    name: new FormControl('',Validators.required),
    last: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    address: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    code: new FormControl('',Validators.required),
  });

  onLoadPaymentData = (event: Event): void => {
    const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
    console.log('Load Payment Data', eventDetail.detail)
  }
  toggle() {
    this.hide=!this.hide
  }
  togle(){
    this.hide=true 
  }
order(){
  console.log(this.orderForm.value)
this.service.orderNow(this.orderForm.value).subscribe((res:any)=>{
  console.log('order',res)
})
}


}




