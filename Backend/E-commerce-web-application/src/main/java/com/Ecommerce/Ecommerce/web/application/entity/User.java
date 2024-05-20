package com.Ecommerce.Ecommerce.web.application.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long Cart_id;
    private String User_id;

    public String getQuantity() {
        return Quantity;
    }

    public void setQuantity(String quantity) {
        Quantity = quantity;
    }

    public String getProduct_id() {
        return Product_id;
    }

    public void setProduct_id(String product_id) {
        Product_id = product_id;
    }

    public String getUser_id() {
        return User_id;
    }

    public void setUser_id(String user_id) {
        User_id = user_id;
    }

    public Long getCart_id() {
        return Cart_id;
    }

    public void setCart_id(Long cart_id) {
        Cart_id = cart_id;
    }

    private String Product_id;
    private String Quantity;

    public User(Long cart_id, String user_id, String product_id, String quantity) {
        Cart_id = cart_id;
        User_id = user_id;
        Product_id = product_id;
        Quantity = quantity;
    }

    public User() {


    }

    @Override
    public String toString() {
        return "Cart{" +
                "Cart_id=" + Cart_id +
                ", User_id=" + User_id +
                ", Product_id=" + Product_id +
                ", Quantity=" + Quantity +
                '}';
    }


}
