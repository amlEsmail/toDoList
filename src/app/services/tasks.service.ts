import { Subject } from 'rxjs';

export class TaskService {
    allTasks:string[]=["study JS","study HTML","study css"];
    completed:string[]=["study Jquery"];
    compChanged=new Subject<string[]>();
    tasksChanged=new Subject<string[]>();
    editId=new Subject<number>();

    
    getTasks()
    {
        return this.allTasks.slice();
    }



    getcompleteTasks()
    {
        return this.completed.slice();
    }



    addTask(task:string)
    {
        this.allTasks.push(task);
        this.tasksChanged.next(this.allTasks);
    }



    addToComplete(id:number)
    {
        this.completed.push(this.allTasks[id]);
        this.compChanged.next(this.completed);
        this.allTasks.splice(id,1);
        this.tasksChanged.next(this.allTasks);
    }



    getSingleTask(id:number)
    {
        return this.allTasks[id];
    }



    updateSingleTask(newTask:string,id:number)
    {
        this.allTasks[id]=newTask;
        this.tasksChanged.next(this.allTasks);
    }



    deleteTask(id:number)
    {
        this.allTasks.splice(id,1);
        this.tasksChanged.next(this.allTasks);
    }


    removeCompTask(id:number)
    {
        this.completed.splice(id,1);
        this.compChanged.next(this.completed);
    }
    
}