import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecyclehook';

  inputVal : string = '';
  toDestroy : boolean = false;
  
  constructor(){
    console.log('App component Constructor');
  }

  searchText(el : HTMLInputElement){
    this.inputVal = el.value;
  }

  // ngAfterViewInit(){
  //   console.log('Parent ngAfterViewInit hook called');
  // }

  // ngAfterViewChecked(){
  //   console.log('Parent ngAfterViewChecked hook called');
  // }

  destroyComponent(){
    this.toDestroy = !this.toDestroy;
  }
}
