import { Component } from '@angular/core';
import { Apiservices } from '../../apiservices';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  products: any[] = [];
  constructor(private apiservice:Apiservices) {}
  ngOnInit() {
    this.apiservice.getProduct().subscribe((data: any) => {
     this.products = data;
      console.log(data);
    });
  }
  }



  
