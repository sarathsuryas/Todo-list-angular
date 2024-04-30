import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>()
  changeTaskButton:boolean = false
  constructor() { }
 toggleTask(){
  this.changeTaskButton = !this.changeTaskButton;
    this.subject.next(this.changeTaskButton)
 }
 onToggleTaskForm():Observable<any>{
    return this.subject.asObservable()
 }

}
