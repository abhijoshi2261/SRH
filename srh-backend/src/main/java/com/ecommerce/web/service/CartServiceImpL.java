package com.ecommerce.web.service;

import com.ecommerce.web.entity.Cart;
import com.ecommerce.web.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CartServiceImpL implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart saveCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> fetchCartList() {
        return cartRepository.findAll();
    }

    @Override
    public Cart fatchCartById(Long cart_id) {
        return cartRepository.findById(cart_id).get();
    }

    @Override
    public void deleteCartById(Long cart_id) {
        cartRepository.deleteById(cart_id);
    }

    @Override
    public Cart updateCart(Long cartId, Cart cart) {
        Cart cartDB = cartRepository.findById(cartId).get();

        if (Objects.nonNull(cart.getUser_id()) &&
                !"".equalsIgnoreCase(cart.getUser_id())) {
            cartDB.setUser_id(cart.getUser_id());
        }
        if (Objects.nonNull(cart.getProduct_id()) &&
                !"".equalsIgnoreCase(cart.getProduct_id())) {
            cartDB.setProduct_id(cart.getProduct_id());
        }

        if (Objects.nonNull(cart.getQuantity()) &&
                !"".equalsIgnoreCase(cart.getQuantity())) {
            cartDB.setQuantity(cart.getQuantity());
        }
        return cartRepository.save(cartDB);

    }
}
