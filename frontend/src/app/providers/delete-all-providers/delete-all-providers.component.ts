import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-delete-all-providers',
  templateUrl: './delete-all-providers.component.html',
  styleUrls: ['./delete-all-providers.component.css']
})
export class DeleteAllProvidersComponent {
  id!:number;
  name!:string;
  message!:string;
  isDeleted=false;
  constructor(private providerService:ProviderService,private route:ActivatedRoute){

  }
  ngOnInit():void{
     
      this.deleteIt();
  }
  deleteIt()
  {
      this.providerService.deleteAll()
      .subscribe(data=>{
          this.isDeleted=true;
      },
      error=>{
          console.log(error);
      }
      );
  }
}
