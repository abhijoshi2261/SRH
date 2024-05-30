package com.ecommerce.web.service;

import com.ecommerce.web.entity.VendorOrderDetails;

import java.util.List;

public interface VendorOrderDetailsService {
    VendorOrderDetails saveVendorOrderDetails(VendorOrderDetails vendorOrderDetails);

    List<VendorOrderDetails> fetchVendorOrderDetailsList();

    VendorOrderDetails fetchVendorOrderDetailsById(Long id);

    void deleteVendorOrderDetailsById(Long id);

    VendorOrderDetails updateVendorOrderDetails(Long id, VendorOrderDetails vendorOrderDetails);
}
