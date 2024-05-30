package com.ecommerce.web.controller;

import com.ecommerce.web.entity.VendorAddress;
import com.ecommerce.web.service.VendorAddressService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vendor-addresses")
public class VendorAddressController {

    @Autowired
    private VendorAddressService vendorAddressService;

    @PostMapping
    public VendorAddress saveVendorAddress(@Valid @RequestBody VendorAddress vendorAddress) {
        return vendorAddressService.saveVendorAddress(vendorAddress);
    }

    @GetMapping
    public List<VendorAddress> fetchVendorAddressList() {
        return vendorAddressService.fetchVendorAddressList();
    }

    @GetMapping("/vendorad/{id}")
    public VendorAddress fetchVendorAddressById(@PathVariable("id") Long id) {
        return vendorAddressService.fetchVendorAddressById(id);
    }

    @DeleteMapping("/vendorad/{id}")
    public String deleteVendorAddressById(@PathVariable("id") Long id) {
        vendorAddressService.deleteVendorAddressById(id);
        return "Vendor address has been deleted successfully!";
    }

    @PutMapping("/vendorad/{id}")
    public VendorAddress updateVendorAddress(@PathVariable("id") Long id, @RequestBody VendorAddress vendorAddress) {
        return vendorAddressService.updateVendorAddress(id, vendorAddress);
    }
}
