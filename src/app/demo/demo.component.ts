import { Component, Input, OnInit, OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges{

  @Input() message! : string;
  constructor(){
    console.log('Demo component Constructor');
    console.log(this.message);
  }
  
  ngOnChanges(changes : SimpleChanges){
    console.log('After using ngOnChanges');
    console.log(changes);
  }
  
}
