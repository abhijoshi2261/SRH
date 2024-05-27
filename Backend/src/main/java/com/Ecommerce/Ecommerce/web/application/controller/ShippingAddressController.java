package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.ShippingAddress;
import com.Ecommerce.Ecommerce.web.application.service.ShippingAddressService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shipping-addresses")
public class ShippingAddressController {

    @Autowired
    private ShippingAddressService shippingAddressService;

    @PostMapping
    public ShippingAddress saveShippingAddress(@Valid @RequestBody ShippingAddress shippingAddress) {
        return shippingAddressService.saveShippingAddress(shippingAddress);
    }

    @GetMapping
    public List<ShippingAddress> fetchShippingAddressList() {
        return shippingAddressService.fetchShippingAddressList();
    }

    @GetMapping("/shipad/{id}")
    public ShippingAddress fetchShippingAddressById(@PathVariable("id") Long id) {
        return shippingAddressService.fetchShippingAddressById(id);
    }

    @DeleteMapping("/shipad/{id}")
    public String deleteShippingAddressById(@PathVariable("id") Long id) {
        shippingAddressService.deleteShippingAddressById(id);
        return "Shipping address has been deleted successfully!";
    }

    @PutMapping("/shipad/{id}")
    public ShippingAddress updateShippingAddress(@PathVariable("id") Long id, @RequestBody ShippingAddress shippingAddress) {
        return shippingAddressService.updateShippingAddress(id, shippingAddress);
    }
}
