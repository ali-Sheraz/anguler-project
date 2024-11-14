import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ContactComponent } from '../contact/contact.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProvidersComponent } from '../providers/providers.component';




@NgModule({
  declarations: [LoginComponent,RegisterComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule],
  exports:[
    LoginComponent,RegisterComponent
  ]
})
export class UserModule { }
