import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputControlComponent } from './input-control/input-control.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    InputControlComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoListService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
