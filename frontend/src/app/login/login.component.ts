// import { Component, OnDestroy } from "@angular/core";
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { ProviderService } from "src/app/services/provider.service";
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnDestroy {
//   loginForm!: FormGroup;
//   errorMessage: string = ''; // Initialize error message
//   remainingTime: number = 0; // Initialize remaining time
//   countdownInterval: any; // Store the interval ID
//   errorMessageNew!: string;
//   ready = false;

//   count: number = 0; // Initialize login attempts count

//   constructor(private providerService: ProviderService, private router: Router) { }

//   ngOnInit(): void {
//     this.buildFormControl();
//   }

//   ngOnDestroy(): void {
//     // Clear the interval when the component is destroyed
//     clearInterval(this.countdownInterval);
//   }

//   onSubmit() {
//     const name = this.loginForm.get('name')?.value;
//     console.log("login Form data:", this.loginForm.value);
//     if (name.length >= 2) {
//       if (this.countdownInterval === undefined) { // Check if the countdown is not already running
//         this.providerService.loginProvider({ name: name }) // Send the name as a string
//           .subscribe(
//             (data) => {
//               console.log("Successfully logged in", data);
//               // Reset the error message, count, and stop the countdown
//               this.errorMessageNew = 'Login';
//               this.ready = true;
//               this.count = 0;
//               this.errorMessage = ''; // Reset error message on successful login
//               clearInterval(this.countdownInterval); // Stop the countdown when successful
//             },
//             (error) => {
//               this.count++;
//               if (this.count > 4) {
//                 // Set the error message to be displayed in the HTML
//                 alert(this.errorMessage = "Blocked For 30 Seconds"); // You can customize this message
//                 // Start the countdown timer only if it's not already running
//                 this.remainingTime = 30;
//                 this.startCountdown();
//                 this.count=0;
//                 console.log(error);
//               } else {
//                 // Set the error message to be displayed in the HTML
//                 this.ready = false;
//                 this.errorMessage = `Invalid Credential: Limit Remaining ${5 - this.count}`;
//                 console.log(`Invalid Credential: Limit Remaining ${5 - this.count}`);
//               }
//             }
//           );
//       } else {
//         // Display a message indicating that the user needs to wait for the current countdown to complete
//         this.errorMessage = `Please wait for the current countdown to complete.`;
//       }
//     }
//   }
  

//   buildFormControl() {
//     this.loginForm = new FormGroup({
//       name: new FormControl('', [Validators.required, Validators.minLength(2)]),
//     });
//   }

//   startCountdown() {
//     // Start the countdown only if it's not already running
//     if (this.countdownInterval === undefined) {
//       this.countdownInterval = setInterval(() => {
//         if (this.remainingTime > 0) {
//           this.remainingTime--;
//         } else {
//           // Stop the countdown when it reaches 0
//           clearInterval(this.countdownInterval);
//           this.countdownInterval = undefined; // Reset the interval ID
//         }
//       }, 1000);
//     }
//   }
// }
import { Component, OnDestroy } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProviderService } from "src/app/services/provider.service";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginForm!: FormGroup;
  errorMessage: string = ''; // Initialize error message
  remainingTime: number = 0; // Initialize remaining time
  countdownInterval: any; // Store the interval ID
  errorMessageNew!: string;
  ready = false;

  count: number = 0; // Initialize login attempts count

  constructor(private providerService: ProviderService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.buildFormControl();
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    clearInterval(this.countdownInterval);
  }

  onSubmit() {
    const name = this.loginForm.get('name')?.value;
    console.log("login Form data:", this.loginForm.value);
    if (name.length >= 2) {
      
      if (this.countdownInterval === undefined) {
        this.providerService.loginProvider({ name: name })
          .subscribe(
            (data) => {
              console.log("Successfully logged in", data);
              this.errorMessageNew = 'Login';
              this.ready = true;
              this.count = 0;
              this.errorMessage = '';
              clearInterval(this.countdownInterval);
            

              // Display a success message in a red box
              this.snackBar.open('Login Successful', 'Close', {
                duration: 3000, // Duration in milliseconds
                // panelClass: ['red-snackbar'], // Apply a custom CSS class for the red box
                verticalPosition: 'top',
              });
              this.router.navigate(['providers']);
            },
            (error) => {
              this.count++;
              if (this.count > 4) {
                // Set the error message to be displayed in the HTML
                this.showErrorMessage("Blocked For 30 Seconds");
                this.remainingTime = 30;
                this.startCountdown();
                this.count = 0;
                console.log(error);
              } else {
                // Set the error message to be displayed in the HTML
                this.ready=false;
                this.showErrorMessage(`Invalid Credential: Limit Remaining ${5 - this.count}`);
                console.log(`Invalid Credential: Limit Remaining ${5 - this.count}`);
              }
            }
          );
      } else {
        this.errorMessage = `Please wait for the current countdown to complete.`;
      }
    }
  }

  showErrorMessage(message: string) {
    // Display an error message in a red box at the top
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['red-snackbar'],
      verticalPosition: 'top',
    });
  }

  buildFormControl() {
    this.loginForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  startCountdown() {
    // Start the countdown only if it's not already running
    if (this.countdownInterval === undefined) {
      this.countdownInterval = setInterval(() => {
        if (this.remainingTime > 0) {
          this.remainingTime--;
        } else {
          // Stop the countdown when it reaches 0
          clearInterval(this.countdownInterval);
          this.countdownInterval = undefined; // Reset the interval ID
        }
      }, 1000);
    }
  }
}


