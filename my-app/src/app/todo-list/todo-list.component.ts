import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todo:{name:string,des:string,id:number}={name:'',des:'',id:0}
  @Output() deleteTodo:EventEmitter<Todo>=new EventEmitter
  // item!: Todo;  
 
constructor(){}
ngOninit(){

}
onClick(todo:any){
  console.log(todo)
}
}