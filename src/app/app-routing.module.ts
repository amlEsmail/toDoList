import { CompleteComponent } from './complete/complete.component';
import { AddComponent } from './add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskEditComponent } from './add/task-edit/task-edit.component';

const routes: Routes = [
  {path:"" ,redirectTo:"/newtask",pathMatch:"full"},
  {path:"newtask",component:AddComponent},
  {path:"finished",component:CompleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
