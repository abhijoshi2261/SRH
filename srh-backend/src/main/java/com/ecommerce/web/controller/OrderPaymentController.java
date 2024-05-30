package com.ecommerce.web.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.web.entity.OrderPayment;
import com.ecommerce.web.service.OrderPaymentService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/order-payments")
public class OrderPaymentController {

    @Autowired
    private OrderPaymentService orderPaymentService;

    @PostMapping
    public OrderPayment saveOrderPayment(@Valid @RequestBody OrderPayment orderPayment) {
        return orderPaymentService.saveOrderPayment(orderPayment);
    }

    @GetMapping
    public List<OrderPayment> fetchOrderPaymentList() {
        return orderPaymentService.fetchOrderPaymentList();
    }

    @GetMapping("/op/{id}")
    public OrderPayment fetchOrderPaymentById(@PathVariable("id") Long id) {
        return orderPaymentService.fetchOrderPaymentById(id);
    }

    @DeleteMapping("/op/{id}")
    public String deleteOrderPaymentById(@PathVariable("id") Long id) {
        orderPaymentService.deleteOrderPaymentById(id);
        return "Order payment has been deleted successfully!";
    }

    @PutMapping("/op/{id}")
    public OrderPayment updateOrderPayment(@PathVariable("id") Long id, @RequestBody OrderPayment orderPayment) {
        return orderPaymentService.updateOrderPayment(id, orderPayment);
    }
}
