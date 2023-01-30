import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoopingService } from '../shooping.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent {
  public product: any = []
  public products: any = []
  public grandTotal: any;
  public subTotal: any;
  constructor(private Router: ActivatedRoute,
    private service: ShoopingService) {
  }
  ngOnInit() {

    // this.getProducts();
    // this.removeItem(this.product)
    
    this.grandTotal = this.service.getTotalPrice()
    console.log('grandtotal',this.grandTotal)

    this.service.getProducts().subscribe((res) => {
      this.products = res;
      
    })

    // this.product=this.service.loadCart()
    // this.products=JSON.parse(this.product)

    // this.grandTotal=this.products.price
    // console.log('grand total',this.grandTotal)

  }
  // getProducts(){
  // this.products=JSON.parse(localStorage.getItem('cart_items')as any)
  // console.log('================>',this.products)
  // }





  // removeItem(product:any) {
  //   // this.service.removeCartItem(item)
  //   this.service.removeCartItem(product)
  //   this.getProducts()
  // }
  removeItem(item: any) {
    this.service.removeCartItem(item)
    this.grandTotal = this.service.getTotalPrice()
  }

  emptyCart() {
    this.service.removeAllCart()
  }

  quantityHandle(val: string, item: any) {
    if (item.quantity < 20 && val === 'plus') {
      item.quantity += 1
      item.total = item.price * item.quantity
      this.grandTotal = this.service.getTotalPrice()
      console.log('prod',this.products)
     
    }
    else if (item.quantity > 1 && val === 'min') {
      item.quantity -= 1;
      item.total = item.price * item.quantity
      this.grandTotal = this.service.getTotalPrice()
    }
  }

  chekout() {
    localStorage.setItem('cart total', JSON.stringify(this.grandTotal))
  }
  changeTotal(product: any, index: any) {
    const qut = this.products.quantity
    const amount = this.products.price
    this.subTotal = qut * amount
    console.log('subtotal', this.subTotal)
  }
}
