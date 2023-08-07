import { Component,Input ,Output,EventEmitter} from '@angular/core';
import { Task } from './../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
  @Input() task!:Task
  @Output() onDeleteTask:EventEmitter<Task>= new EventEmitter()
  @Output() onToggleReminder: EventEmitter<Task>=new EventEmitter()

  faTimes=faTimes

  onDelete(task: any): void{
    this.onDeleteTask.emit(task)
  }

  onToggle(task:any):void{
    this.onToggleReminder.emit(task)
    console.log(task,"tasktkkk")
  }
}
