package com.ecommerce.web.service;

import com.ecommerce.web.entity.Store;
import com.ecommerce.web.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class StoreServiceImpl implements StoreService {

    @Autowired
    private StoreRepository storeRepository;

    @Override
    public Store saveStore(Store store) {
        return storeRepository.save(store);
    }

    @Override
    public List<Store> fetchStoreList() {
        return storeRepository.findAll();
    }

    @Override
    public Store fetchStoreById(Long id) {
        return storeRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteStoreById(Long id) {
        storeRepository.deleteById(id);
    }

    @Override
    public Store updateStore(Long id, Store store) {
        Store storeDB = storeRepository.findById(id).orElse(null);

        if (storeDB != null) {
            if (Objects.nonNull(store.getName()) && !"".equalsIgnoreCase(store.getName())) {
                storeDB.setName(store.getName());
            }
            if (Objects.nonNull(store.getManagerId()) && !"".equalsIgnoreCase(store.getManagerId())) {
                storeDB.setManagerId(store.getManagerId());
            }
            if (Objects.nonNull(store.getAddLine1()) && !"".equalsIgnoreCase(store.getAddLine1())) {
                storeDB.setAddLine1(store.getAddLine1());
            }
            if (Objects.nonNull(store.getAddLine2())) {
                storeDB.setAddLine2(store.getAddLine2());
            }
            if (Objects.nonNull(store.getCity()) && !"".equalsIgnoreCase(store.getCity())) {
                storeDB.setCity(store.getCity());
            }
            if (Objects.nonNull(store.getState()) && !"".equalsIgnoreCase(store.getState())) {
                storeDB.setState(store.getState());
            }
            if (Objects.nonNull(store.getCountry()) && !"".equalsIgnoreCase(store.getCountry())) {
                storeDB.setCountry(store.getCountry());
            }
            if (Objects.nonNull(store.getPincode()) && !"".equalsIgnoreCase(store.getPincode())) {
                storeDB.setPincode(store.getPincode());
            }
        }
        return storeRepository.save(storeDB);
    }
}
