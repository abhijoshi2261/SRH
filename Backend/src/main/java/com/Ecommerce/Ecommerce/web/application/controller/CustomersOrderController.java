package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.CustomersOrder;
import com.Ecommerce.Ecommerce.web.application.service.CustomersOrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
