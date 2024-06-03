import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-lifecyclehook';

  inputVal : string = '';
  
  constructor(){
    console.log('App component Constructor');
  }

  searchText(el : HTMLInputElement){
    this.inputVal = el.value;
  }
}
