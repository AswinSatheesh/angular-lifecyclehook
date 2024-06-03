import { Component, Input, OnInit, OnChanges,SimpleChanges, ViewChild, ElementRef,DoCheck } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit,DoCheck{

  @Input() message! : string;
  @ViewChild('temp') tempPara! : ElementRef;
  constructor(){
    console.log('Demo component Constructor');
    // console.log(this.message);
  }
  
  ngOnChanges(changes : SimpleChanges){
    console.log('After using ngOnChanges');
    // console.log(changes);
  }

  ngOnInit(){
    console.log("After using NgOnInit");
    // console.log(this.tempPara.nativeElement);
  }
  
  ngDoCheck(){
    console.log('ngDoCheck hook called');
  }
}
