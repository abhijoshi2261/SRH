package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.BillingAddress;

import java.util.List;

public interface BillingAddressService {
    BillingAddress saveBillingAddress(BillingAddress billingAddress);

    List<BillingAddress> fetchBillingAddressList();

    BillingAddress fetchBillingAddressById(Long id);

    void deleteBillingAddressById(Long id);

    BillingAddress updateBillingAddress(Long id, BillingAddress billingAddress);
}
