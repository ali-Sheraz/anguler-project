import { Component } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ProviderClass } from '../models/providers.class';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
  providers: ProviderClass[] = [];

  constructor(private providerService: ProviderService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.providerService.getproviders().subscribe(
      (data) => {
        if (data && data.length > 0) {
          this.providers = data;
          console.log(data[0].name); // Access the first item's name
        } else {
          console.log('List is empty.');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
