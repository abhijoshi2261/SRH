package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.Store;

import java.util.List;

public interface StoreService {
    Store saveStore(Store store);

    List<Store> fetchStoreList();

    Store fetchStoreById(Long id);

    void deleteStoreById(Long id);

    Store updateStore(Long id, Store store);
}
