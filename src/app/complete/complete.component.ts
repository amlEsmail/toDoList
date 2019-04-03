import { TaskService } from './../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  finsishedTasks:string[]=[]
  constructor(private taskService:TaskService) { }

  ngOnInit() {
    this.finsishedTasks=this.taskService.getcompleteTasks();
    this.taskService.compChanged.subscribe(
      (tasks:string[])=>{this.finsishedTasks=tasks}
    )
  }

  removetask(index:number)
  {
    this.taskService.removeCompTask(index);

  }

}
