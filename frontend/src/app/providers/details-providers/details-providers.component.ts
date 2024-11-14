import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProviderClass } from "src/app/models/providers.class";
import { ProviderService } from "src/app/services/provider.service";

@Component({
    selector: 'app-details-providers',
    templateUrl: './details-providers.component.html',
    styleUrls: ['./details-providers.component.css']
})
export class DetailsProvidersComponent implements OnInit {

    id!: number;
    providers: ProviderClass[] = [];
    submitted = false;

    constructor(
        private route: ActivatedRoute,
        private providerService: ProviderService
    ) { }

    ngOnInit() {
        // Retrieve the provider ID from the route parameters
        this.route.paramMap.subscribe((params) => {
            const idParam = params.get('id');
            if (idParam !== null) {
                this.id = parseInt(idParam, 10);
            }
        });

        // Simulate a delay of 2 seconds before setting submitted to true
        setTimeout(() => {
            // Use the provider ID to fetch the details
            this.providerService.getonerecord(this.id).subscribe(
                (data) => {
                    this.providers = data;
                    this.submitted = true;
                },
                (error) => {
                    console.log(error);
                }
            );
        }, 2000); // Delay for 2 seconds (2000 milliseconds)
    }
}
