package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.VendorOrderDetails;
import com.Ecommerce.Ecommerce.web.application.service.VendorOrderDetailsService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendor-order-details")
public class VendorOrderDetailsController {

    @Autowired
    private VendorOrderDetailsService vendorOrderDetailsService;

    @PostMapping
    public VendorOrderDetails saveVendorOrderDetails(@Valid @RequestBody VendorOrderDetails vendorOrderDetails) {
        return vendorOrderDetailsService.saveVendorOrderDetails(vendorOrderDetails);
    }

    @GetMapping
    public List<VendorOrderDetails> fetchVendorOrderDetailsList() {
        return vendorOrderDetailsService.fetchVendorOrderDetailsList();
    }

    @GetMapping("/vendor-order-details/{id}")
    public VendorOrderDetails fetchVendorOrderDetailsById(@PathVariable("id") Long id) {
        return vendorOrderDetailsService.fetchVendorOrderDetailsById(id);
    }

    @DeleteMapping("/vendor-order-details/{id}")
    public String deleteVendorOrderDetailsById(@PathVariable("id") Long id) {
        vendorOrderDetailsService.deleteVendorOrderDetailsById(id);
        return "Vendor order details have been deleted successfully!";
    }

    @PutMapping("/vendor-order-details/{id}")
    public VendorOrderDetails updateVendorOrderDetails(@PathVariable("id") Long id, @RequestBody VendorOrderDetails vendorOrderDetails) {
        return vendorOrderDetailsService.updateVendorOrderDetails(id, vendorOrderDetails);
    }
}
