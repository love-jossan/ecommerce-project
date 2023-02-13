import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoopingService {
  public cartItemList: any = []
  // public productList:any=[]
  public productList = new BehaviorSubject<any>([]);
  url = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  // saveCart() {
  //   localStorage.setItem('cart_items', JSON.stringify(this.cartItemList))
  // }
  // loadCart() {
  //   let products = localStorage.getItem('cart_items')

  //   return products;

  // }
  // removeCartItem(product: any) {

  //   const index = this.cartItemList.findIndex((x: any) => x.id === product.id);
  //   if (index > -1) {
  //     this.cartItemList.splice(index, 1)
  //     this.saveCart()
  //   }
  // }
  addToCart(product: any) {

    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    console.log(this.cartItemList)
    this.getTotalPrice()
    // this.saveCart()
    // this.loadCart()

  }
  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
      console.log(grandTotal)

    })
    return grandTotal;
  }
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList)
  }



  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList)

  }
  orderNow(data: any) {
    return this.http.post<any>(`http://localhost:3000/order`, data)
  }
  order() {
    return this.http.get<any>(`http://localhost:3000/order`)
  }


  // --------------------------api----------------------------------------
  products() {
    return this.http.get<any>(this.url)
  }
  getProductsId(id: any) {
    return this.http.get(this.url + id)
  }

  getProductId(id: any) {
    return this.http.get<any>(`http://localhost:3000/posts/${id}`)
  }
  signup(data: any) {
    return this.http.post<any>(`http://localhost:3000/signup`, data)
  }
  login() {
    return this.http.get<any>(`http://localhost:3000/signup`)
  }



}
