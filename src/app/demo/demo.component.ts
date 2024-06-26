import { Component, Input, OnInit, OnChanges,SimpleChanges, ViewChild, ElementRef,DoCheck,AfterContentInit,ContentChild,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() message! : string;
  @ViewChild('temp') tempPara! : ElementRef;
  @ContentChild('temp') paraContent! : ElementRef;
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
    // console.log('In ngDoCheck',this.paraContent);
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit hook called');
    // console.log('In ngAfterContentInit',this.paraContent.nativeElement.outerHTML);  
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked hook called');
    // console.log('ngAfterContentChecked',this.tempPara)
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit hook called');
    // console.log('ngAfterViewInit',this.tempPara)
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked hook called');
    console.log(this.tempPara.nativeElement.textContent)
  }

  ngOnDestroy(){
    console.log('ngOnDestroy hook called');

  }
}
