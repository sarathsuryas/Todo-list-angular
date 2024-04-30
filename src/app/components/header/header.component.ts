import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private subscription!:Subscription
  showAddTask:boolean = false;
  title:string = "Task Tracker"
  constructor(private uiService:UiService,private router:Router){ 
    this.subscription = this.uiService.onToggleTaskForm().subscribe((value)=>this.showAddTask = value)
  }
  addToggleTask(){
    this.uiService.toggleTask()
  }
  hasRoute(route:string){
      return this.router.url === route
  }
}
