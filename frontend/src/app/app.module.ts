import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProvidersModule } from './providers/providers.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NotfoundComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ProvidersModule,
    FormsModule,
    UserModule,
    MatSnackBarModule, 
    RouterModule,
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule to the imports array
    HttpClientModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
