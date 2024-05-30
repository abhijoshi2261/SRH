package com.ecommerce.web.service;

import com.ecommerce.web.entity.BillingAddress;
import com.ecommerce.web.repository.BillingAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class BillingAddressServiceImpl implements BillingAddressService {

    @Autowired
    private BillingAddressRepository billingAddressRepository;

    @Override
    public BillingAddress saveBillingAddress(BillingAddress billingAddress) {
        return billingAddressRepository.save(billingAddress);
    }

    @Override
    public List<BillingAddress> fetchBillingAddressList() {
        return billingAddressRepository.findAll();
    }

    @Override
    public BillingAddress fetchBillingAddressById(Long id) {
        return billingAddressRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteBillingAddressById(Long id) {
        billingAddressRepository.deleteById(id);
    }

    @Override
    public BillingAddress updateBillingAddress(Long id, BillingAddress billingAddress) {
        BillingAddress billingAddressDB = billingAddressRepository.findById(id).orElse(null);

        if (billingAddressDB != null) {
            if (Objects.nonNull(billingAddress.getOrderId()) && !"".equalsIgnoreCase(billingAddress.getOrderId())) {
                billingAddressDB.setOrderId(billingAddress.getOrderId());
            }
            if (Objects.nonNull(billingAddress.getUserId()) && !"".equalsIgnoreCase(billingAddress.getUserId())) {
                billingAddressDB.setUserId(billingAddress.getUserId());
            }
            if (Objects.nonNull(billingAddress.getAddLine1()) && !"".equalsIgnoreCase(billingAddress.getAddLine1())) {
                billingAddressDB.setAddLine1(billingAddress.getAddLine1());
            }
            if (Objects.nonNull(billingAddress.getAddLine2())) {
                billingAddressDB.setAddLine2(billingAddress.getAddLine2());
            }
            if (Objects.nonNull(billingAddress.getCity()) && !"".equalsIgnoreCase(billingAddress.getCity())) {
                billingAddressDB.setCity(billingAddress.getCity());
            }
            if (Objects.nonNull(billingAddress.getState()) && !"".equalsIgnoreCase(billingAddress.getState())) {
                billingAddressDB.setState(billingAddress.getState());
            }
            if (Objects.nonNull(billingAddress.getPincode()) && !"".equalsIgnoreCase(billingAddress.getPincode())) {
                billingAddressDB.setPincode(billingAddress.getPincode());
            }
            if (Objects.nonNull(billingAddress.getCountry()) && !"".equalsIgnoreCase(billingAddress.getCountry())) {
                billingAddressDB.setCountry(billingAddress.getCountry());
            }
        }
        return billingAddressRepository.save(billingAddressDB);
    }
}
