import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'react-todo-footer',
  host: {
    '[count]': 'remainintCount',
    '[hasCompleted]': 'hasCompleted',
    '(clear-completed)': 'removeCompleted()',
    '[status]': 'currentStatus',
    '[router]': 'router'
  },
  template: ''
})
export class ReactTodoFooterComponent implements OnInit, OnDestroy {
  currentStatus = '';
  hasCount: boolean;
  hasCompleted: boolean;
  remainintCount: number;
  routeSubscription: Subscription;
  todosSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.routeSubscription = this.route.params
      .map((params) => params.status)
      .subscribe((status) => (this.currentStatus = status || ''));

    this.todosSubscription = this.todoService.todos$.subscribe((todos) => {
      this.hasCount = !!todos.length;
      this.hasCompleted = !!todos.filter((todo) => todo.completed).length;
      this.remainintCount = todos.filter((todo) => !todo.completed).length;
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
    this.todosSubscription.unsubscribe();
  }

  removeCompleted(): void {
    this.todoService.removeCompleted();
  }
  removeCompleted_alien(): void {
    this.todoService.removeCompleted.bind(this.todoService)();
  }
}
