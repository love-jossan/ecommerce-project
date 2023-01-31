import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoopingService } from '../shooping.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})

export class DialogComponent {
  newProduct = []
  cart: boolean = false
  products: any = []
  quantity: number = 1;
  // productsList:any = []
  constructor(private shooping: ShoopingService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.shooping.products().subscribe((res) => {
    //   this.productsList = res 
    //    console.log('productlist>>>>>>',this.productsList)
    // })



    let id: any = this.route.snapshot.url[1].path;
    this.shooping.getProductId(id).subscribe((res: any) => {
      console.log('==========', res)
      this.products = res
      this.products.quantity = 1
      let total:number
      this.products.total=this.products.quantity*this.products.price
      //  this.products.push(this.newProduct)
      // console.log('  new productsssss',this.newProduct)
      // console.log('productsssss', this.products.quantity)
    })

    // this.shoopingItems()

  }
  addToCart(products: any) {

    this.shooping.addToCart(products);
    
    this.cart = true
    // this.router.navigate(['/cart-details'])
  }
  removeCart(products: any) {
    this.shooping.removeCartItem(products)
   
    this.cart = false
  }

}
  // shoopingItems() {
  //   this.shooping.products().subscribe((res) => {
  //      console.log('shooping data', res)
  //     this.products = res
  //      console.log('data',this.products)
  //   })
