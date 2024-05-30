package com.ecommerce.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.web.entity.Product;
import com.ecommerce.web.service.ProductService;

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
