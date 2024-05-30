package com.ecommerce.web.controller;

import com.ecommerce.web.entity.Store;
import com.ecommerce.web.service.StoreService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stores")
public class StoreController {

    @Autowired
    private StoreService storeService;

    @PostMapping
    public Store saveStore(@Valid @RequestBody Store store) {
        return storeService.saveStore(store);
    }

    @GetMapping
    public List<Store> fetchStoreList() {
        return storeService.fetchStoreList();
    }

    @GetMapping("/store/{id}")
    public Store fetchStoreById(@PathVariable("id") Long id) {
        return storeService.fetchStoreById(id);
    }

    @DeleteMapping("/store/{id}")
    public String deleteStoreById(@PathVariable("id") Long id) {
        storeService.deleteStoreById(id);
        return "Store has been deleted successfully!";
    }

    @PutMapping("/store/{id}")
    public Store updateStore(@PathVariable("id") Long id, @RequestBody Store store) {
        return storeService.updateStore(id, store);
    }
}
