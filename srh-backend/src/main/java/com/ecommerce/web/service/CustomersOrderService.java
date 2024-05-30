package com.ecommerce.web.service;

import com.ecommerce.web.entity.CustomersOrder;

import java.util.List;

public interface CustomersOrderService {
    CustomersOrder saveOrder(CustomersOrder order);

    List<CustomersOrder> fetchOrderList();

    CustomersOrder fetchOrderById(Long id);

    void deleteOrderById(Long id);

    CustomersOrder updateOrder(Long id, CustomersOrder order);
}
