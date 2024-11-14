import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  check = true;
  randomNumber: number | undefined; // Declare the randomNumber property

  title = 'Mean Stack Agency';
  num = [10, 20, 23, 34, 56, 54, 66, 77, 44];

  sum = () => {
    return this.num[0] + this.num[1];
  }

  red = "background-color:red";
  green = "background-color:green";
  message = "";

  click = (val: string) => {
    alert("Clicked!!");
    this.message = val;
  }

  toggle() {
    this.check = !this.check;
  }

  inc() {
    // Initialize the randomNumber property in the inc method
    this.randomNumber = Math.floor(Math.random() * 100);
    this.num.push(this.randomNumber);
    
  }
  dec() {
    // Initialize the randomNumber property in the inc method
    
    this.num.pop();
    
  }
}
