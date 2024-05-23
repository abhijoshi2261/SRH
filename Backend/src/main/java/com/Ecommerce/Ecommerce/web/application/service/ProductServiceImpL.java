package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.Cart;
import com.Ecommerce.Ecommerce.web.application.entity.Product;
import com.Ecommerce.Ecommerce.web.application.repository.CartRepository;
import com.Ecommerce.Ecommerce.web.application.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpL implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> fetchProductList() {
        return productRepository.findAll();
    }

    @Override
    public Product fatchProductById(Long product_id) {
        return productRepository.findById(product_id).get();
    }

    @Override
    public void deleteProductById(Long product_id) {
        productRepository.deleteById(product_id);
    }

    @Override
    public Product updateProduct(Long product_id, Product product) {
        Product productDB = productRepository.findById(product_id).get();


        if(Objects.nonNull(product.getProduct_id()) &&
                !"".equalsIgnoreCase(String.valueOf(product.getProduct_id()))){
            productDB.setProduct_id(product.getProduct_id());
        }

        if(Objects.nonNull(product.getProduct_Name()) &&
                !"".equalsIgnoreCase(product.getProduct_Name())){
            productDB.setProduct_Name(product.getProduct_Name());
        }
        if(Objects.nonNull(product.getProduct_Catagory()) &&
                !"".equalsIgnoreCase(product.getProduct_Catagory())){
            productDB.setProduct_Catagory(product.getProduct_Catagory());
        }
        return productRepository.save(productDB);

    }
}
