import { TaskService } from './../../services/tasks.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
 
})
export class TasksListComponent implements OnInit {

  Tasks:string[]=[];

  constructor(private taskService:TaskService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
      this.Tasks= this.taskService.getTasks();
      this.taskService.tasksChanged.subscribe(
        (tasks:string[])=>{this.Tasks=tasks}
      )


  }

  editTask(id:number)
  {
    this.taskService.editId.next(id);
  
  }
  completeTask(id:number)
  {
    this.taskService.addToComplete(id)
  }
  

  
  
}
