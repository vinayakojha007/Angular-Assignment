import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  @Output() todoAdded = new EventEmitter<string>();
  newTodo: string = '';
  value: string = '';
  tempView: boolean = false;
  @Input() item = '';

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoAdded.emit(this.newTodo);
      this.newTodo = '';
    }
  }

  templateFunction() {
    this.tempView = !this.tempView;
    console.log('template function called');
    this.value = 'Template Data ';
  }
}
