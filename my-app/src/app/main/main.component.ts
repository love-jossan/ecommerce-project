import { Component } from '@angular/core';
import { ShoopingService } from '../shooping.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  orderList:any
constructor(private service:ShoopingService){

}
ngOnInit(){
this.service.order().subscribe((res)=>{
console.log('order list',res)
  this.orderList=res
})
}

}
