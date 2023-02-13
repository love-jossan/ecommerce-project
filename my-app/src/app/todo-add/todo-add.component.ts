import { Component} from '@angular/core';
import{Todo}from '../Todo'
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  // list:any[]=[]
  list:Todo[]
  // saveitem:any=[]
  constructor(){
    this.list=[
      {
        id:1,
    name:'anil',
    des:'star',
    isactive:true,
      },
      { id:6,
    name:'sidhu',
    des:'mohali',
    isactive:true }
    ]
  // this.list=  JSON.parse(localStorage.getItem('add-item') || '{}');
  // console.log((localStorage.getItem('add-item') || '{}'))
  }
// add(item:string){
// this.list.push({id:this.list.length,name:item})
// console.log(this.list)
// localStorage.setItem('add-item',JSON.stringify(this.list))
  

// }
// remove(item:any){
//   var index = this.list.indexOf(item);
//   this.list.splice(index, 1);
//   localStorage.setItem('add-item',JSON.stringify(this.list))
  
// }
//  this.list = this.list.filter(item=>item.id!==id)
//   console.log(id)
todoDelete(todo:any){
const index=this.list.indexOf(todo)
console.log(index)
this.list.splice(index,1)
}
}
