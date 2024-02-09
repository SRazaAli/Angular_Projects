import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {
  title:string = "";
  description:string = "";
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit(){
    const todo = {
      serNo : 8,
      title : this.title,
      description : this.description,
      activeStatus : true
    }
    this.todoAdd.emit(todo);
  }
}
