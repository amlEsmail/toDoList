import { TaskService } from './services/tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { CompleteComponent } from './complete/complete.component';
import { TasksListComponent } from './add/tasks-list/tasks-list.component';
import { TaskEditComponent } from './add/task-edit/task-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    CompleteComponent,
    TasksListComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
