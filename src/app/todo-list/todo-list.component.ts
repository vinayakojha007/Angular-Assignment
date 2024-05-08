import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos: string[] = [];

  currentItem = 'Parent Data';
  addTodo(todo: string) {
    this.todos.push(todo);
  }

  user = 'admin';

  toggle() {
    if (this.user === 'admin') {
      this.user = 'user';
    } else {
      this.user = 'admin';
    }
  }
}
