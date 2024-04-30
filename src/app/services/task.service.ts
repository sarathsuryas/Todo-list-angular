import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../task';
import { Observable,of } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
const httpOptions = {
  headers:new HttpHeaders({
  'Content-Type':'application/json'  
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
  private apiUrl = "http://localhost:5000/tasks"
  getTask() :Observable<Task[]>{

     return this.http.get<Task[]>(this.apiUrl)
  }
  deleteTask(task:Task){
   const url = `${this.apiUrl}/${task.id}`
   return this.http.delete<Task>(url) 
  }
  toggleTask(task:Task){
    const url = `${this.apiUrl}/${task.id}`
    return this.http.put<Task>(url,task,httpOptions)
  }
  addTask(task:Task){
    return this.http.post<Task>(this.apiUrl,task,httpOptions)
  }
}
