package com.ecommerce.web.controller;

import com.ecommerce.web.entity.VendorOrder;
import com.ecommerce.web.service.VendorOrderService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendor-orders")
public class VendorOrderController {

    @Autowired
    private VendorOrderService vendorOrderService;

    @PostMapping
    public VendorOrder saveVendorOrder(@Valid @RequestBody VendorOrder vendorOrder) {
        return vendorOrderService.saveVendorOrder(vendorOrder);
    }

    @GetMapping
    public List<VendorOrder> fetchVendorOrderList() {
        return vendorOrderService.fetchVendorOrderList();
    }

    @GetMapping("/vendor-orders/{id}")
    public VendorOrder fetchVendorOrderById(@PathVariable("id") Long id) {
        return vendorOrderService.fetchVendorOrderById(id);
    }

    @DeleteMapping("/vendor-orders/{id}")
    public String deleteVendorOrderById(@PathVariable("id") Long id) {
        vendorOrderService.deleteVendorOrderById(id);
        return "Vendor order has been deleted successfully!";
    }

    @PutMapping("/vendor-orders/{id}")
    public VendorOrder updateVendorOrder(@PathVariable("id") Long id, @RequestBody VendorOrder vendorOrder) {
        return vendorOrderService.updateVendorOrder(id, vendorOrder);
    }
}
