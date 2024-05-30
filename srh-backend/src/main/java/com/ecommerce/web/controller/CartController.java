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

import com.ecommerce.web.entity.Cart;
import com.ecommerce.web.service.CartService;

import jakarta.validation.Valid;

@RestController
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/cart")
    public Cart saveCart(@Valid @RequestBody Cart cart){
        return cartService.saveCart(cart);
    }

    @GetMapping("/cart")
    public List<Cart> fetchCartList() {
        return cartService.fetchCartList();
    }

    @GetMapping("/cart/{id}")
    public Cart fatchCartById(@PathVariable("id")Long cart_id){
    return cartService.fatchCartById(cart_id);
    }

    @DeleteMapping("/cart/{id}")
    public String deleteCartById(@PathVariable("id")Long cart_id){
        cartService.deleteCartById(cart_id);
        return "The Data will removed!!!";
    }

    @PutMapping("/cart/{id}")
    public Cart updateCart(@PathVariable("id") Long cart_id,
                           @RequestBody Cart cart){
        return cartService.updateCart(cart_id,cart);
    }
}
