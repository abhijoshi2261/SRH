package com.ecommerce.web.service;

import com.ecommerce.web.entity.Cart;

import java.util.List;

public interface CartService {
    public Cart saveCart(Cart cart);

    public List<Cart> fetchCartList();

    public Cart fatchCartById(Long cart_id);

    public void deleteCartById(Long cart_id);

    public Cart updateCart(Long cartId, Cart cart);
}
