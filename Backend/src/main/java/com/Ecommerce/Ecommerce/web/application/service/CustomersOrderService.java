package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.CustomersOrder;

import java.util.List;

public interface CustomersOrderService {
    CustomersOrder saveOrder(CustomersOrder order);

    List<CustomersOrder> fetchOrderList();

    CustomersOrder fetchOrderById(Long id);

    void deleteOrderById(Long id);

    CustomersOrder updateOrder(Long id, CustomersOrder order);
}
