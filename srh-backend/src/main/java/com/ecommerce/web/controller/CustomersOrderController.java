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

import com.ecommerce.web.entity.CustomersOrder;
import com.ecommerce.web.service.CustomersOrderService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/orders")
public class CustomersOrderController {

    @Autowired
    private CustomersOrderService customersOrderService;

    @PostMapping
    public CustomersOrder saveOrder(@Valid @RequestBody CustomersOrder order) {
        return customersOrderService.saveOrder(order);
    }

    @GetMapping
    public List<CustomersOrder> fetchOrderList() {
        return customersOrderService.fetchOrderList();
    }

    @GetMapping("/co/{id}")
    public CustomersOrder fetchOrderById(@PathVariable("id") Long id) {
        return customersOrderService.fetchOrderById(id);
    }

    @DeleteMapping("/co/{id}")
    public String deleteOrderById(@PathVariable("id") Long id) {
        customersOrderService.deleteOrderById(id);
        return "Order has been deleted successfully!";
    }

    @PutMapping("/co/{id}")
    public CustomersOrder updateOrder(@PathVariable("id") Long id, @RequestBody CustomersOrder order) {
        return customersOrderService.updateOrder(id, order);
    }
}
