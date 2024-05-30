package com.ecommerce.web.service;

import com.ecommerce.web.entity.ShippingAddress;

import java.util.List;

public interface ShippingAddressService {
    ShippingAddress saveShippingAddress(ShippingAddress shippingAddress);

    List<ShippingAddress> fetchShippingAddressList();

    ShippingAddress fetchShippingAddressById(Long id);

    void deleteShippingAddressById(Long id);

    ShippingAddress updateShippingAddress(Long id, ShippingAddress shippingAddress);
}
