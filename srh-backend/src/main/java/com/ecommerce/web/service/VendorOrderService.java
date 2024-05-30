package com.ecommerce.web.service;

import com.ecommerce.web.entity.VendorOrder;

import java.util.List;

public interface VendorOrderService {
    VendorOrder saveVendorOrder(VendorOrder vendorOrder);

    List<VendorOrder> fetchVendorOrderList();

    VendorOrder fetchVendorOrderById(Long id);

    void deleteVendorOrderById(Long id);

    VendorOrder updateVendorOrder(Long id, VendorOrder vendorOrder);
}
