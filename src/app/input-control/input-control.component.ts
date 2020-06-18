import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent implements OnInit {
  title = 'Enter Task';
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() { 
   
  }

  ngOnInit(): void {
   
  }

  addTask(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
