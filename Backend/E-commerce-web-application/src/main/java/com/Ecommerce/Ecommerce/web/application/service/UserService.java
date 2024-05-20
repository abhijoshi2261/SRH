package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.Cart;

import java.util.List;

public interface UserService
{
    public Cart saveCart(Cart cart);

   public List<Cart> fetchCartList();

    public Cart fatchCartById(Long cart_id);

    public void deleteCartById(Long cart_id);

   public Cart updateCart(Long cartId, Cart cart);
}
