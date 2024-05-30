package com.ecommerce.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Product_id;
    private String Product_Name;
    private String Product_Catagory;

    public Long getProduct_id() {
        return Product_id;
    }

    public void setProduct_id(Long product_id) {
        Product_id = product_id;
    }

    public String getProduct_Name() {
        return Product_Name;
    }

    public void setProduct_Name(String product_Name) {
        Product_Name = product_Name;
    }

    public String getProduct_Catagory() {
        return Product_Catagory;
    }

    public void setProduct_Catagory(String product_Catagory) {
        Product_Catagory = product_Catagory;
    }

    @Override
    public String toString() {
        return "Product{" +
                "Product_id=" + Product_id +
                ", Product_Name='" + Product_Name + '\'' +
                ", Product_Catagory='" + Product_Catagory + '\'' +
                '}';
    }

    public Product() {

    }

    public Product(Long product_id, String product_Name, String product_Catagory) {
        Product_id = product_id;
        Product_Name = product_Name;
        Product_Catagory = product_Catagory;
    }
}
