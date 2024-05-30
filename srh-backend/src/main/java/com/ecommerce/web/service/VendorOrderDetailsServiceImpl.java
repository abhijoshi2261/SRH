package com.ecommerce.web.service;

import com.ecommerce.web.entity.VendorOrderDetails;
import com.ecommerce.web.repository.VendorOrderDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class VendorOrderDetailsServiceImpl implements VendorOrderDetailsService {

    @Autowired
    private VendorOrderDetailsRepository vendorOrderDetailsRepository;

    @Override
    public VendorOrderDetails saveVendorOrderDetails(VendorOrderDetails vendorOrderDetails) {
        return vendorOrderDetailsRepository.save(vendorOrderDetails);
    }

    @Override
    public List<VendorOrderDetails> fetchVendorOrderDetailsList() {
        return vendorOrderDetailsRepository.findAll();
    }

    @Override
    public VendorOrderDetails fetchVendorOrderDetailsById(Long id) {
        return vendorOrderDetailsRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteVendorOrderDetailsById(Long id) {
        vendorOrderDetailsRepository.deleteById(id);
    }

    @Override
    public VendorOrderDetails updateVendorOrderDetails(Long id, VendorOrderDetails vendorOrderDetails) {
        VendorOrderDetails vendorOrderDetailsDB = vendorOrderDetailsRepository.findById(id).orElse(null);

        if (vendorOrderDetailsDB != null) {
            if (Objects.nonNull(vendorOrderDetails.getOrderId())
                    && !"".equalsIgnoreCase(vendorOrderDetails.getOrderId())) {
                vendorOrderDetailsDB.setOrderId(vendorOrderDetails.getOrderId());
            }
            if (Objects.nonNull(vendorOrderDetails.getProductId())
                    && !"".equalsIgnoreCase(vendorOrderDetails.getProductId())) {
                vendorOrderDetailsDB.setProductId(vendorOrderDetails.getProductId());
            }
            if (Objects.nonNull(vendorOrderDetails.getQuantity())
                    && !"".equalsIgnoreCase(vendorOrderDetails.getQuantity())) {
                vendorOrderDetailsDB.setQuantity(vendorOrderDetails.getQuantity());
            }
        }
        return vendorOrderDetailsRepository.save(vendorOrderDetailsDB);
    }
}
