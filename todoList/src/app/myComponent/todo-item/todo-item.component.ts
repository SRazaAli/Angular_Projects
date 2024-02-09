import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from "../../Todo";  
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  
  deleteItem(todo:Todo){    //event Emitter towards parent
    this.todoDelete.emit(todo);
    console.log("This method has been triggered")
  }
  markAsDone(todo:Todo){
    this.todoCheckbox.emit(todo);
  }
}
