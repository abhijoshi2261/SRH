package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.VendorAddress;
import com.Ecommerce.Ecommerce.web.application.repository.VendorAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class VendorAddressServiceImpl implements VendorAddressService {

    @Autowired
    private VendorAddressRepository vendorAddressRepository;

    @Override
    public VendorAddress saveVendorAddress(VendorAddress vendorAddress) {
        return vendorAddressRepository.save(vendorAddress);
    }

    @Override
    public List<VendorAddress> fetchVendorAddressList() {
        return vendorAddressRepository.findAll();
    }

    @Override
    public VendorAddress fetchVendorAddressById(Long id) {
        return vendorAddressRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteVendorAddressById(Long id) {
        vendorAddressRepository.deleteById(id);
    }

    @Override
    public VendorAddress updateVendorAddress(Long id, VendorAddress vendorAddress) {
        VendorAddress vendorAddressDB = vendorAddressRepository.findById(id).orElse(null);

        if (vendorAddressDB != null) {
            if (Objects.nonNull(vendorAddress.getUserId()) && !"".equalsIgnoreCase(vendorAddress.getUserId())) {
                vendorAddressDB.setUserId(vendorAddress.getUserId());
            }
            if (Objects.nonNull(vendorAddress.getLine1()) && !"".equalsIgnoreCase(vendorAddress.getLine1())) {
                vendorAddressDB.setLine1(vendorAddress.getLine1());
            }
            if (Objects.nonNull(vendorAddress.getLine2())) {
                vendorAddressDB.setLine2(vendorAddress.getLine2());
            }
            if (Objects.nonNull(vendorAddress.getCity()) && !"".equalsIgnoreCase(vendorAddress.getCity())) {
                vendorAddressDB.setCity(vendorAddress.getCity());
            }
            if (Objects.nonNull(vendorAddress.getState()) && !"".equalsIgnoreCase(vendorAddress.getState())) {
                vendorAddressDB.setState(vendorAddress.getState());
            }
            if (Objects.nonNull(vendorAddress.getCountry()) && !"".equalsIgnoreCase(vendorAddress.getCountry())) {
                vendorAddressDB.setCountry(vendorAddress.getCountry());
            }
            if (Objects.nonNull(vendorAddress.getPincode()) && !"".equalsIgnoreCase(vendorAddress.getPincode())) {
                vendorAddressDB.setPincode(vendorAddress.getPincode());
            }
        }
        return vendorAddressRepository.save(vendorAddressDB);
    }
}
