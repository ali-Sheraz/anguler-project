import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "Mean Stack"

  containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: '#f5f5f5',
  };

  titleStyle = {
    fontSize: '2rem',
    marginBottom: '1rem',
  };

  countdownStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  buttonStyle = {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    background: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  count: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  handleStart(): void {
    const input = prompt('Enter number to start countdown');
    const parsedData = parseInt(input || '0');
    if (!isNaN(parsedData) && parsedData >= 0) {
      this.count = parsedData;
    }
    this.startCountdown();
  }
  startCountdown() {
    const interval = setInterval(() => {
      if (this.count > 0) {
        this.count--;
      }
    }, 1000);


  }
}
