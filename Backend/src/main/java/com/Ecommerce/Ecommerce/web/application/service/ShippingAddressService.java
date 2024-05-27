package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.ShippingAddress;

import java.util.List;

public interface ShippingAddressService {
    ShippingAddress saveShippingAddress(ShippingAddress shippingAddress);

    List<ShippingAddress> fetchShippingAddressList();

    ShippingAddress fetchShippingAddressById(Long id);

    void deleteShippingAddressById(Long id);

    ShippingAddress updateShippingAddress(Long id, ShippingAddress shippingAddress);
}
