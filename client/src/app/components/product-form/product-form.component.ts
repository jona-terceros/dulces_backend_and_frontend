import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../service/product.service";
import { Product } from "../../interfaces/Product";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],

})
export class ProductFormComponent implements OnInit {
  product: Product = {
    nombre: '',
    marca: '',
    sabor: '',
    cantidad: 0
  };
  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }


  ngOnInit() {
  const params = this.activatedRoute.snapshot.params['id'];
    if (params['id']) {
      this.productService.getProduct(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/']);
      },
      (err) => console.log(err),
    );
  }

  updateProduct() {
    //delete this.product._id;
    this.productService.updateProduct(this.product._id, this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
      )
  }
}
