import { Component, Input, OnInit } from '@angular/core';
import { Todo } from "../../Todo";  
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent{
  localStorageItem:string |null= "";
  
  todos:Todo[] = [];    //array holding todos objs
  
  constructor() {
    this.localStorageItem = localStorage.getItem("todos");
    if(this.localStorageItem === null){
    this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localStorageItem);
    }
}
deleteTodoObjFromArray(todo:Todo){
  const indexOfObj = this.todos.indexOf(todo);
  this.todos.splice(indexOfObj,1);
  localStorage.setItem("todos",JSON.stringify(this.todos));
  console.log(todo);
}
addTodo(todo:Todo){
  console.log(todo)
  this.todos.push(todo);
  localStorage.setItem("todos",JSON.stringify(this.todos));
  console.log(todo);
}
toggleStrike(todo:Todo){
  const indexOfObj = this.todos.indexOf(todo);
  this.todos[indexOfObj].activeStatus = !this.todos[indexOfObj].activeStatus;
  localStorage.setItem("todos",JSON.stringify(this.todos));
  console.log(todo);
}
}

  // ngOnInit(): void {
      
  // }

