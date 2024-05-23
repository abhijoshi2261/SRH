package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.Cart;
import com.Ecommerce.Ecommerce.web.application.entity.Product;
import com.Ecommerce.Ecommerce.web.application.service.CartService;
import com.Ecommerce.Ecommerce.web.application.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping("/product")
    public Product saveProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    @GetMapping("/product")
    public List<Product> fetchProductList() {
        return productService.fetchProductList();
    }

    @GetMapping("/product/{id}")
    public Product fatchProductById(@PathVariable("id")Long product_id){
    return productService.fatchProductById(product_id);
    }

    @DeleteMapping("/product/{id}")
    public String deleteProductById(@PathVariable("id")Long product_id){
        productService.deleteProductById(product_id);
        return "The Data will removed!!!";
    }

    @PutMapping("/product/{id}")
    public Product updateProduct(@PathVariable("id") Long product_id,
                           @RequestBody Product product){
        return productService.updateProduct(product_id,product);
    }
}
