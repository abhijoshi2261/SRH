package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.VendorOrderDetails;

import java.util.List;

public interface VendorOrderDetailsService {
    VendorOrderDetails saveVendorOrderDetails(VendorOrderDetails vendorOrderDetails);

    List<VendorOrderDetails> fetchVendorOrderDetailsList();

    VendorOrderDetails fetchVendorOrderDetailsById(Long id);

    void deleteVendorOrderDetailsById(Long id);

    VendorOrderDetails updateVendorOrderDetails(Long id, VendorOrderDetails vendorOrderDetails);
}
