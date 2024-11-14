import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProvidersComponent } from './providers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';

import { EditProvidersComponent } from './edit-providers/edit-providers.component';
import { DeleteAllProvidersComponent } from './delete-all-providers/delete-all-providers.component';
import { DetailsProvidersComponent } from './details-providers/details-providers.component';

@NgModule({
  declarations: [
   ProvidersComponent,
   AddProvidersComponent,
   DeleteProvidersComponent,
 DetailsProvidersComponent,
   EditProvidersComponent,
  DeleteAllProvidersComponent,

   
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ProvidersComponent,
    ReactiveFormsModule,
    AddProvidersComponent,
    DeleteProvidersComponent,
    DetailsProvidersComponent,
    EditProvidersComponent,
    DeleteAllProvidersComponent

  
  ],
})
export class ProvidersModule { }
