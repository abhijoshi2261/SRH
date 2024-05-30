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

import com.ecommerce.web.entity.BillingAddress;
import com.ecommerce.web.service.BillingAddressService;

import jakarta.validation.Valid;

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
