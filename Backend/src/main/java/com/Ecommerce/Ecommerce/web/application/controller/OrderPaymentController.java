package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.OrderPayment;
import com.Ecommerce.Ecommerce.web.application.service.OrderPaymentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
