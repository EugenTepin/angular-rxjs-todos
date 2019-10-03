import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import './rxjs-operators';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import { TodoService } from './services/todo.service';

import { AppComponent } from './app.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { ReactTodoFooterComponent } from './components/react-todo-footer/react-todo-footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  declarations: [
    AppComponent,
    TodoHeaderComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFooterComponent,
    ReactTodoFooterComponent,
    ...routedComponents
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
