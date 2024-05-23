package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.Product;

import java.util.List;

public interface ProductService
{
    public Product saveProduct(Product product);

   public List<Product> fetchProductList();

    public Product fatchProductById(Long product_id);

    public void deleteProductById(Long product_id);

   public Product updateProduct(Long Product_Id, Product product);
}
