package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.ShippingAddress;
import com.Ecommerce.Ecommerce.web.application.repository.ShippingAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ShippingAddressServiceImpl implements ShippingAddressService {

    @Autowired
    private ShippingAddressRepository shippingAddressRepository;

    @Override
    public ShippingAddress saveShippingAddress(ShippingAddress shippingAddress) {
        return shippingAddressRepository.save(shippingAddress);
    }

    @Override
    public List<ShippingAddress> fetchShippingAddressList() {
        return shippingAddressRepository.findAll();
    }

    @Override
    public ShippingAddress fetchShippingAddressById(Long id) {
        return shippingAddressRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteShippingAddressById(Long id) {
        shippingAddressRepository.deleteById(id);
    }

    @Override
    public ShippingAddress updateShippingAddress(Long id, ShippingAddress shippingAddress) {
        ShippingAddress shippingAddressDB = shippingAddressRepository.findById(id).orElse(null);

        if (shippingAddressDB != null) {
            if (Objects.nonNull(shippingAddress.getOrderId()) && !"".equalsIgnoreCase(shippingAddress.getOrderId())) {
                shippingAddressDB.setOrderId(shippingAddress.getOrderId());
            }
            if (Objects.nonNull(shippingAddress.getUserId()) && !"".equalsIgnoreCase(shippingAddress.getUserId())) {
                shippingAddressDB.setUserId(shippingAddress.getUserId());
            }
            if (Objects.nonNull(shippingAddress.getAddLine1()) && !"".equalsIgnoreCase(shippingAddress.getAddLine1())) {
                shippingAddressDB.setAddLine1(shippingAddress.getAddLine1());
            }
            if (Objects.nonNull(shippingAddress.getAddLine2())) {
                shippingAddressDB.setAddLine2(shippingAddress.getAddLine2());
            }
            if (Objects.nonNull(shippingAddress.getCity()) && !"".equalsIgnoreCase(shippingAddress.getCity())) {
                shippingAddressDB.setCity(shippingAddress.getCity());
            }
            if (Objects.nonNull(shippingAddress.getState()) && !"".equalsIgnoreCase(shippingAddress.getState())) {
                shippingAddressDB.setState(shippingAddress.getState());
            }
            if (Objects.nonNull(shippingAddress.getPincode()) && !"".equalsIgnoreCase(shippingAddress.getPincode())) {
                shippingAddressDB.setPincode(shippingAddress.getPincode());
            }
            if (Objects.nonNull(shippingAddress.getCountry()) && !"".equalsIgnoreCase(shippingAddress.getCountry())) {
                shippingAddressDB.setCountry(shippingAddress.getCountry());
            }
        }
        return shippingAddressRepository.save(shippingAddressDB);
    }
}
