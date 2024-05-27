package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.BillingAddress;
import com.Ecommerce.Ecommerce.web.application.service.BillingAddressService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/billing-addresses")
public class BillingAddressController {

    @Autowired
    private BillingAddressService billingAddressService;

    @PostMapping
    public BillingAddress saveBillingAddress(@Valid @RequestBody BillingAddress billingAddress) {
        return billingAddressService.saveBillingAddress(billingAddress);
    }

    @GetMapping
    public List<BillingAddress> fetchBillingAddressList() {
        return billingAddressService.fetchBillingAddressList();
    }

    @GetMapping("/ba/{id}")
    public BillingAddress fetchBillingAddressById(@PathVariable("id") Long id) {
        return billingAddressService.fetchBillingAddressById(id);
    }

    @DeleteMapping("/ba/{id}")
    public String deleteBillingAddressById(@PathVariable("id") Long id) {
        billingAddressService.deleteBillingAddressById(id);
        return "Billing Address has been deleted successfully!";
    }

    @PutMapping("/ba/{id}")
    public BillingAddress updateBillingAddress(@PathVariable("id") Long id, @RequestBody BillingAddress billingAddress) {
        return billingAddressService.updateBillingAddress(id, billingAddress);
    }
}
