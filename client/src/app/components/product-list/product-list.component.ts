import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../interfaces/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] | any;

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (res) => (this.products = res),
      (err) => console.log(err),
    );
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(
      (res) => {
        console.log(res);
        this.getProducts();
      },
      (err) => console.log(err),
    );
  }
}
