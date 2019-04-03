import { TaskService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  editMode:boolean=false;
  editingTask:string;
  Id:number;
  taskForm:FormGroup;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.taskService.editId.subscribe(
      (index:number)=>{
        this.editMode=true; 
        this.Id=index;
        this.initForm();
       
      } )
    this.initForm();
  }

  private initForm()
  {
    let taskname ="";
    if(this.editMode)
    {
      this.editingTask=this.taskService.getSingleTask(this.Id);
      taskname=this.editingTask;

    }
    this.taskForm = new FormGroup({
     task: new FormControl(taskname,Validators.required)
    });


    
  }

  onSubmit()
  {
   const taskVal=this.taskForm.value["task"];
    console.log(this.taskForm);
    
    if(this.editMode)
    {
     this.taskService.updateSingleTask(taskVal,this.Id);
    }
    else
    {
      this.taskService.addTask(taskVal)
    }
    this.editMode=false;
    this.taskForm.reset();

  }
  removeTask()
  {
    this.taskService.deleteTask(this.Id);
    this.editMode=false;
    this.taskForm.reset();
  }

}
