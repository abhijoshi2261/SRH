package com.ecommerce.web.service;

import com.ecommerce.web.entity.OrderPayment;

import java.util.List;

public interface OrderPaymentService {
    OrderPayment saveOrderPayment(OrderPayment orderPayment);

    List<OrderPayment> fetchOrderPaymentList();

    OrderPayment fetchOrderPaymentById(Long id);

    void deleteOrderPaymentById(Long id);

    OrderPayment updateOrderPayment(Long id, OrderPayment orderPayment);
}
