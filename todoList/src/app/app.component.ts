import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "null";
  name = "null";
  age = 0;
  degree = "null";
  designation = "null";

  constructor(){
    setTimeout(() => {
      this.title = 'First Angular Website';
      this.age = 19;
      this.name  = "Raza Ali";
      this.degree = "BSCS";
      this.designation = "Fullstack developer";
    }, 5000);
  }
}
