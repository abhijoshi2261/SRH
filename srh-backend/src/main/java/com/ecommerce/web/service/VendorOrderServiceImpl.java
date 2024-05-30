package com.ecommerce.web.service;

import com.ecommerce.web.entity.VendorOrder;
import com.ecommerce.web.repository.VendorOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class VendorOrderServiceImpl implements VendorOrderService {

    @Autowired
    private VendorOrderRepository vendorOrderRepository;

    @Override
    public VendorOrder saveVendorOrder(VendorOrder vendorOrder) {
        return vendorOrderRepository.save(vendorOrder);
    }

    @Override
    public List<VendorOrder> fetchVendorOrderList() {
        return vendorOrderRepository.findAll();
    }

    @Override
    public VendorOrder fetchVendorOrderById(Long id) {
        return vendorOrderRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteVendorOrderById(Long id) {
        vendorOrderRepository.deleteById(id);
    }

    @Override
    public VendorOrder updateVendorOrder(Long id, VendorOrder vendorOrder) {
        VendorOrder vendorOrderDB = vendorOrderRepository.findById(id).orElse(null);

        if (vendorOrderDB != null) {
            if (Objects.nonNull(vendorOrder.getOrderId()) && !"".equalsIgnoreCase(vendorOrder.getOrderId())) {
                vendorOrderDB.setOrderId(vendorOrder.getOrderId());
            }
            if (Objects.nonNull(vendorOrder.getProductId()) && !"".equalsIgnoreCase(vendorOrder.getProductId())) {
                vendorOrderDB.setProductId(vendorOrder.getProductId());
            }
            if (Objects.nonNull(vendorOrder.getQuantity())) {
                vendorOrderDB.setQuantity(vendorOrder.getQuantity());
            }
        }
        return vendorOrderRepository.save(vendorOrderDB);
    }
}
