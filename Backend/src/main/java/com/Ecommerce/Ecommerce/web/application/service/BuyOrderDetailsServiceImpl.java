package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.BuyOrderDetails;
import com.Ecommerce.Ecommerce.web.application.repository.BuyOrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BuyOrderDetailsServiceImpl implements BuyOrderDetailsService {

    @Autowired
    private BuyOrderDetailsRepository orderRepository;

    @Override
    public BuyOrderDetails saveOrder(BuyOrderDetails order) {
        return orderRepository.save(order);
    }

    @Override
    public List<BuyOrderDetails> fetchOrderList() {
        return orderRepository.findAll();
    }

    @Override
    public BuyOrderDetails fetchOrderById(Long orderId) {
        return orderRepository.findById(orderId).get();
    }

    @Override
    public void deleteOrderById(Long orderId) {
        orderRepository.deleteById(orderId);
    }

    @Override
    public BuyOrderDetails updateOrder(Long orderId, BuyOrderDetails order) {
        BuyOrderDetails orderDB = orderRepository.findById(orderId).get();

        if(Objects.nonNull(order.getUserId()) &&
                !"".equalsIgnoreCase(order.getUserId())){
            orderDB.setUserId(order.getUserId());
        }
        if(Objects.nonNull(order.getProductId()) &&
                !"".equalsIgnoreCase(order.getProductId())){
            orderDB.setProductId(order.getProductId());
        }
        if(Objects.nonNull(order.getQuantity())){
            orderDB.setQuantity(order.getQuantity());
        }


        return orderRepository.save(orderDB);
    }
}
