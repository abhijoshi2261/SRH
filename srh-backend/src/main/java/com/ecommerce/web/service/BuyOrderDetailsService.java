package com.ecommerce.web.service;

import com.ecommerce.web.entity.BuyOrderDetails;

import java.util.List;

public interface BuyOrderDetailsService {
    BuyOrderDetails saveOrder(BuyOrderDetails order);

    List<BuyOrderDetails> fetchOrderList();

    BuyOrderDetails fetchOrderById(Long orderId);

    void deleteOrderById(Long orderId);

    BuyOrderDetails updateOrder(Long orderId, BuyOrderDetails order);
}
