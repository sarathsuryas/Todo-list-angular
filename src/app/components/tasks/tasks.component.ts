import { Component,OnInit } from '@angular/core';
import { TASKS } from '../../mock-tasks';
import { Task } from '../../task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {
  tasks:Task[] = []
  tk:Task[] = []
  constructor(private taskService:TaskService){
  }

ngOnInit(): void {
 this.taskService.getTask().subscribe((tasks)=>this.tasks = tasks)
}
 deleteTask(task:Task){
      this.taskService.deleteTask(task).subscribe(()=>(this.tasks = this.tasks.filter(t=> t.id!==task.id)))
  }
  toggleTask(task:Task) {
    task.reminder = !task.reminder
    this.taskService.toggleTask(task).subscribe()
  }
  addTask(task:Task){
    this.taskService.addTask(task).subscribe((task)=>this.tasks.push(task))
  }
  
}
