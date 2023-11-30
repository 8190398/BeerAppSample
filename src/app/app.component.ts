import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BeerApp';

  beerObject: any;
  isLoading = false;
  beerArray = ['Rodenbach','Weissbier']
  
  constructor() {}

  ngOnInit(): void {
    this.getRandomBeer();
  }

  getRandomBeer() {
    this.isLoading = true;
    let beer = Math.floor( Math.random() * 2 )
    alert('https://my-microcksinstall-microcks.apps.xnkpeyx0.canadacentral.aroapp.io/rest/Beer+Catalog+API/0.99/beer/'+this.beerArray[beer])
    fetch('https://my-microcksinstall-microcks.apps.xnkpeyx0.canadacentral.aroapp.io/rest/Beer+Catalog+API/0.99/beer/'+this.beerArray[beer]).then(data => {
      return data.json();
      })
      .then(beerObject => {
        console.log(beerObject)
        this.beerObject = beerObject;
        this.isLoading = false;
    });
  }
}
