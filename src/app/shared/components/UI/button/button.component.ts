import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() text = 'Add';
  @Input() classes = 'Add';
  @Input() disCondition:boolean = true ;

  @Output() clickEmitter:EventEmitter<any>= new EventEmitter<any>


  actionFire(event :any):any {
    this.clickEmitter.emit(event)
  }

}
