import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from '../../task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  text!:string;
  day!:string;
  reminder:boolean = false;
  @Output() onAdd:EventEmitter<Task> = new EventEmitter()
 onAddTask(){
  if(!this.text){
    alert("Please add the task");
    return
  }
  const newTask = {
    text:this.text,
    day:this.day,
    reminder:this.reminder
  }
  this.text = '';
  this.day = '';
  this.reminder = false;
 this.onAdd.emit(newTask)
 }
 toggleTask:boolean = false;
 private subscription!:Subscription
 constructor(private uiService:UiService) {
this.subscription = uiService.onToggleTaskForm().subscribe((value)=>this.toggleTask = value)
 }
 
}
