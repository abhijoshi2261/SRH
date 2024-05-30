package com.ecommerce.web.service;

import com.ecommerce.web.entity.OrderPayment;
import com.ecommerce.web.repository.OrderPaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class OrderPaymentServiceImpl implements OrderPaymentService {

    @Autowired
    private OrderPaymentRepository orderPaymentRepository;

    @Override
    public OrderPayment saveOrderPayment(OrderPayment orderPayment) {
        return orderPaymentRepository.save(orderPayment);
    }

    @Override
    public List<OrderPayment> fetchOrderPaymentList() {
        return orderPaymentRepository.findAll();
    }

    @Override
    public OrderPayment fetchOrderPaymentById(Long id) {
        return orderPaymentRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteOrderPaymentById(Long id) {
        orderPaymentRepository.deleteById(id);
    }

    @Override
    public OrderPayment updateOrderPayment(Long id, OrderPayment orderPayment) {
        OrderPayment orderPaymentDB = orderPaymentRepository.findById(id).orElse(null);

        if (orderPaymentDB != null) {
            if (Objects.nonNull(orderPayment.getTxnId()) && !"".equalsIgnoreCase(orderPayment.getTxnId())) {
                orderPaymentDB.setTxnId(orderPayment.getTxnId());
            }
            if (Objects.nonNull(orderPayment.getOrderId()) && !"".equalsIgnoreCase(orderPayment.getOrderId())) {
                orderPaymentDB.setOrderId(orderPayment.getOrderId());
            }
            if (Objects.nonNull(orderPayment.getPaymentMode()) && !"".equalsIgnoreCase(orderPayment.getPaymentMode())) {
                orderPaymentDB.setPaymentMode(orderPayment.getPaymentMode());
            }
            if (Objects.nonNull(orderPayment.getAmount())) {
                orderPaymentDB.setAmount(orderPayment.getAmount());
            }
            if (Objects.nonNull(orderPayment.getStatus()) && !"".equalsIgnoreCase(orderPayment.getStatus())) {
                orderPaymentDB.setStatus(orderPayment.getStatus());
            }
        }
        return orderPaymentRepository.save(orderPaymentDB);
    }
}
