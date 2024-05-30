package com.ecommerce.web.controller;

import com.ecommerce.web.entity.BuyOrderDetails;
import com.ecommerce.web.service.BuyOrderDetailsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BuyOrderDetailsController {

    @Autowired
    private BuyOrderDetailsService orderService;

    @PostMapping("/order")
    public BuyOrderDetails saveOrder(@Valid @RequestBody BuyOrderDetails order){
        return orderService.saveOrder(order);
    }

    @GetMapping("/order")
    public List<BuyOrderDetails> fetchOrderList() {
        return orderService.fetchOrderList();
    }

    @GetMapping("/order/{id}")
    public BuyOrderDetails fetchOrderById(@PathVariable("id") Long orderId){
        return orderService.fetchOrderById(orderId);
    }

    @DeleteMapping("/order/{id}")
    public String deleteOrderById(@PathVariable("id") Long orderId){
        orderService.deleteOrderById(orderId);
        return "The order has been removed!";
    }

    @PutMapping("/order/{id}")
    public BuyOrderDetails updateOrder(@PathVariable("id") Long orderId,
                                       @RequestBody BuyOrderDetails order){
        return orderService.updateOrder(orderId, order);
    }
}
