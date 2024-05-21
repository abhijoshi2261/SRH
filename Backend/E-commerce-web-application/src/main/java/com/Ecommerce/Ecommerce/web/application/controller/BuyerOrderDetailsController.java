package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.Cart;
import com.Ecommerce.Ecommerce.web.application.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BuyerOrderDetailsController {

    @Autowired
    private CartService cartService;

    @PostMapping("/cart")
    public Cart saveCart(@RequestBody Cart cart){
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
