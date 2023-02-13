import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  // @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter
  // name: string | undefined
  // des: string | undefined
  // list: any;
  constructor() {

  }
  ngOnInit() {
    // const list = {

    //   id: 3,
    //   name: this.name,
    //   des:this.des
    // }

  }
  // add() {
  //   this.list.push(this.list)
  //   console.log(this.list)
  //   localStorage.setItem('add-item',JSON.stringify(this.list))


  // }

}
