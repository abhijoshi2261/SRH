package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.VendorAddress;

import java.util.List;

public interface VendorAddressService {
    VendorAddress saveVendorAddress(VendorAddress vendorAddress);

    List<VendorAddress> fetchVendorAddressList();

    VendorAddress fetchVendorAddressById(Long id);

    void deleteVendorAddressById(Long id);

    VendorAddress updateVendorAddress(Long id, VendorAddress vendorAddress);
}

