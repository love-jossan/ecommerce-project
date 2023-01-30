import { Component } from '@angular/core';
import { ShoopingService } from '../shooping.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  cart:boolean=false
  public productsList: any;
  constructor(private shooping: ShoopingService,
    private route: Router,
    public dialog: MatDialog) {

  }
  ngOnInit() {
    this.shooping.products().subscribe((res) => {
      this.productsList = res
     
      //  console.log('items products.......',this.productsList)
      this.productsList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      })
    })
  }
  detail(id: any) {
    this.route.navigateByUrl("/dialog/" + id)
  }
  // addToCart(item: any) {
 
  //   this.shooping.addToCart(item)

  // window.alert('your product add successfully')
 


  //   // console.log('item', item)
  // }
//   addToCart(product:any){
// this.shooping.addToCart(product)
// this.cart=true;
//   }
  // removeCart(product:any){
  //   this.shooping.removeCartItem(product)
  // this.cart=false
  // }
 
}

