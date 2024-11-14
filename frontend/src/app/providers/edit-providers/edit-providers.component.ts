import { Component } from "@angular/core";
// import { providers } from "src/app/models/provider.data";
import { ProviderClass } from 'src/app/models/providers.class';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules
import { ProviderService } from "src/app/services/provider.service";
import { ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-edit-providers',
    templateUrl: './edit-providers.component.html',

})
export class EditProvidersComponent {
    submitted = false;
    providers: ProviderClass[] = [];
    provider = new ProviderClass();
    providersForm!: FormGroup; // Define the form as a FormGroup
    nameEror = false;
    nameerrormesg = "Duplicate Name not Allowed"
    namesuccessmesg = "Provider Updated"
    id!: number;
    name!: string;
    ready = false;
    constructor(private providerService: ProviderService, private route: ActivatedRoute) { }
    ngOnInit(): void {
        // Initialize the form with default values
        this.buildFormControl();
        this.loadData();
        this.route.paramMap.subscribe(el => {
            const idParam = el.get('id');
            if (idParam !== null) {
                this.id = parseInt(idParam, 10);
            }
        });
        this.providerService.getonerecord(this.id)
            .subscribe(data => {
                this.provider = data[0];
                console.log(data);
                const temp: { [key: string]: any } = {};
                for (const [k1, v1] of Object.entries(this.provider)) {
                    switch (k1) {
                        case '_id' || 'id': break;
                        case 'city':
                            for (const [k2, v2] of Object.entries(this.provider[k1])) {
                                if (k2 != '_id') {
                                    temp[k2] = v2;
                                }
                            }
                            break;
                        default:
                            temp[k1] = v1;
                    }
                }
                console.log(temp);


                this.providersForm.patchValue(temp);


                this.ready = true;

            },

                error => { console.log(error) }
            )

    }


    handleSubmit() {
        console.log("hello", this.providersForm.value);
        this.buildProvider();
        if (!this.isValidname()) {
            this.providerService.updateProvider(this.id,this.provider)
                .subscribe(
                    data => {
                        this.submitted = true;
                        this.nameEror = false;

                    },
                    error => {
                        console.log(error);
                    }
                )
        }

    }
    isValidname() {
        let name = this.providersForm.get('name')?.value;
        if (this.name == name && this.providers.filter(el => el.name == name).length > 0) {
            this.nameEror = true;
            return true;
        }
        return false;
    }
    buildProvider() {
        let p = this.providersForm.value;
        this.provider.id = this.getNewId();
        this.provider.name = p.name;
        this.provider.age = p.age;

        this.provider.city = {
            city_name: p.city_name,
            city_code: p.city_code,
            city_location: p.city_location,
            city_population: p.city_population
        };
    }
    getNewId() {
        let newId: number;
        while (true) {
            newId = Math.floor(Math.random() * 10000) + 99999;
            if (this.providers.findIndex(el => el.id === newId) === -1) {
                return newId
            }
        }
    }
    buildFormControl() {
        this.providersForm = new FormGroup({

            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            age: new FormControl('', [Validators.required, Validators.minLength(2)]),
            city_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            city_code: new FormControl('', [Validators.required, Validators.minLength(2)]),
            city_location: new FormControl('', [Validators.required, Validators.minLength(2)]),
            city_population: new FormControl('', [Validators.required, Validators.minLength(2)]),
        });
    }
    loadData() {
        this.providerService.getproviders()
            .subscribe(
                data => {
                    this.providers = data;
                    console.log(data.name);
                },
                (error) => {
                    console.log(error);
                }
            );
    }
}