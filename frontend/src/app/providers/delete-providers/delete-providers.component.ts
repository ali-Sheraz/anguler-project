import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProviderService } from "src/app/services/provider.service";

@Component({
    selector:'app-delete-providers',
    templateUrl:'./delete-providers.component.html',

})
export class DeleteProvidersComponent{
    id!:number;
    name!:string;
    message!:string;
    isDeleted=false;
    constructor(private providerService:ProviderService,private route:ActivatedRoute){

    }
    ngOnInit():void{
        this.route.paramMap.subscribe(el => {
            const idParam = el.get('id');
            if (idParam !== null) {
                this.id = parseInt(idParam, 10);
            }
        });
        this.deleteRecord()
    }
    deleteRecord()
    {
        this.providerService.deleteProvider(this.id)
        .subscribe(data=>{
            console.log(data.name);
            this.name=data.name;
            this.isDeleted=true;

        },
        error=>{
            console.log(error);
        }
        )
    }


}
