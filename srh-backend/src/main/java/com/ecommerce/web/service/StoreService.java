package com.ecommerce.web.service;

import com.ecommerce.web.entity.Store;

import java.util.List;

public interface StoreService {
    Store saveStore(Store store);

    List<Store> fetchStoreList();

    Store fetchStoreById(Long id);

    void deleteStoreById(Long id);

    Store updateStore(Long id, Store store);
}
