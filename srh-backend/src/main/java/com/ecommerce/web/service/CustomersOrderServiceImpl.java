package com.ecommerce.web.service;

import com.ecommerce.web.entity.CustomersOrder;
import com.ecommerce.web.repository.CustomersOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CustomersOrderServiceImpl implements CustomersOrderService {

    @Autowired
    private CustomersOrderRepository customersOrderRepository;

    @Override
    public CustomersOrder saveOrder(CustomersOrder order) {
        return customersOrderRepository.save(order);
    }

    @Override
    public List<CustomersOrder> fetchOrderList() {
        return customersOrderRepository.findAll();
    }

    @Override
    public CustomersOrder fetchOrderById(Long id) {
        return customersOrderRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteOrderById(Long id) {
        customersOrderRepository.deleteById(id);
    }

    @Override
    public CustomersOrder updateOrder(Long id, CustomersOrder order) {
        CustomersOrder orderDB = customersOrderRepository.findById(id).orElse(null);

        if (orderDB != null) {
            if (Objects.nonNull(order.getOrderId()) && !"".equalsIgnoreCase(order.getOrderId())) {
                orderDB.setOrderId(order.getOrderId());
            }
            if (Objects.nonNull(order.getProductId()) && !"".equalsIgnoreCase(order.getProductId())) {
                orderDB.setProductId(order.getProductId());
            }
            if (Objects.nonNull(order.getQuantity()) && !"".equalsIgnoreCase(order.getQuantity())) {
                orderDB.setQuantity(order.getQuantity());
            }
        }
        return customersOrderRepository.save(orderDB);
    }
}
