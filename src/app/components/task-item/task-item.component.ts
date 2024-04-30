import { Component,Input,EventEmitter,Output } from '@angular/core';
import { Task } from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
faTimes = faTimes
@Input() tasks!:Task
@Output() onDeleteTask:EventEmitter<Task> = new EventEmitter()
@Output() onToggleTask:EventEmitter<Task> = new EventEmitter()
onDelete(Task:Task){
  this.onDeleteTask.emit()
}
onToggle(task:Task){
   this.onToggleTask.emit()
}
}
