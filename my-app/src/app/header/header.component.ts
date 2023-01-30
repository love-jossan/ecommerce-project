import { Component,OnInit } from '@angular/core';
import { ShoopingService } from '../shooping.service';
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalItem:number=0;
constructor(private shooping:ShoopingService){
 
}
ngOnInit(){
  this.shooping.getProducts().subscribe((res:any)=>{
this.totalItem=res.length;
  })
  
}
}
