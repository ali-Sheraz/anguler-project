import { Component } from "@angular/core";
// import { providers } from "src/app/models/provider.data";
import { ProviderClass } from 'src/app/models/providers.class';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules
import { ProviderService } from "src/app/services/provider.service";

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  
})
// export class AddProvidersComponent {
//   submitted = false;
//   provider = new ProviderClass();
//   providersForm!: FormGroup; // Define the form as a FormGroup

//   ngOnInit ():void {
//     // Initialize the form with default values
//     this.providersForm = new FormGroup({

//       name: new FormControl('',[Validators.required,Validators.minLength(2)]),
//       age: new FormControl(''),
//       city_name: new FormControl(''),
//       city_code: new FormControl(''),
//       city_location: new FormControl(''),
//       city_population: new FormControl(''),
//     });
//   }


//   handleSubmit() {
//     console.log("hello", this.providersForm.value);

//     // Check if the form is valid (you can add validation logic here if needed)
//     // For now, we're assuming the form is always valid

//     let newId: number;
//     while (true) {
//       newId = Math.floor(Math.random() * 10000) + 99999;
//       if (providers.findIndex(el => el.id === newId) === -1) {
//         break;
//       }
//     }
//     let p=this.providersForm.value;
//     this.provider.id = newId;
//     this.provider.name = p.name;
//     this.provider.age = p.age;

//     this.provider.city = {
//       city_name: p.city_name,
//       city_code: p.city_code,
//       city_location: p.city_location,
//       city_population: p.city_population
//     };

//     providers.push(this.provider);
//     this.submitted = true;

//     // Reset the form
//     // this.providersForm.reset({
//     //   name: '',
//     //   age: '',
//     //   city_name: '',
//     //   city_code: '',
//     //   city_location: '',
//     //   city_population: ''
//     // });
//   }
// }
export class AddProvidersComponent {
  submitted = false;
  providers:ProviderClass[]=[];
  provider = new ProviderClass();
  providersForm!: FormGroup; // Define the form as a FormGroup
  nameEror=false;
  nameerrormesg="Duplicate Name not Allowed"
  namesuccessmesg="Provider Added"
constructor(private providerService:ProviderService){}
  ngOnInit ():void {
    // Initialize the form with default values
    this.buildFormControl();
    this.loadData();
 
  }


  handleSubmit() {
    console.log("hello", this.providersForm.value);
    this.buildProvider();
    if(!this.isValidname())
    {
      this.providerService.addproviders(this.provider)
      .subscribe(
        data=>{
          this.submitted = true;
          this.nameEror=false;
          
        },
        error=>{
          console.log(error);
        }
      )
    }

    
   
   

    // providers.push(this.provider);
 

    // Reset the form
    // this.providersForm.reset({
    //   name: '',
    //   age: '',
    //   city_name: '',
    //   city_code: '',
    //   city_location: '',
    //   city_population: ''
    // });
  }
  isValidname()
  {
    let name=this.providersForm.get('name')?.value;
    if(this.providers.filter(el=>el.name==name).length>0)
    {
      this.nameEror=true;
      return true;
    }
    return false;
  }
  buildProvider()
  {
    let p=this.providersForm.value;
    this.provider.id = this.getNewId() ;
    this.provider.name = p.name;
    this.provider.age = p.age;

    this.provider.city = {
      city_name: p.city_name,
      city_code: p.city_code,
      city_location: p.city_location,
      city_population: p.city_population
    };
  }
  getNewId()
  {
    let newId: number;
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999;
      if (this.providers.findIndex(el => el.id === newId) === -1) {
        return newId
      }
    }
  }
  buildFormControl()
  {
    this.providersForm = new FormGroup({

      name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      age: new FormControl('',[Validators.required,Validators.minLength(2)]),
      city_name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      city_code: new FormControl('',[Validators.required,Validators.minLength(2)]),
      city_location: new FormControl('',[Validators.required,Validators.minLength(2)]),
      city_population: new FormControl('',[Validators.required,Validators.minLength(2)]),
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
