package com.Ecommerce.Ecommerce.web.application.controller;

import com.Ecommerce.Ecommerce.web.application.entity.UserAddress;
import com.Ecommerce.Ecommerce.web.application.service.UserAddressService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-addresses")
public class UserAddressController {

    @Autowired
    private UserAddressService userAddressService;

    @PostMapping
    public UserAddress saveUserAddress(@Valid @RequestBody UserAddress userAddress) {
        return userAddressService.saveUserAddress(userAddress);
    }

    @GetMapping
    public List<UserAddress> fetchUserAddressList() {
        return userAddressService.fetchUserAddressList();
    }

    @GetMapping("/userad/{id}")
    public UserAddress fetchUserAddressById(@PathVariable("id") Long id) {
        return userAddressService.fetchUserAddressById(id);
    }

    @DeleteMapping("/userad/{id}")
    public String deleteUserAddressById(@PathVariable("id") Long id) {
        userAddressService.deleteUserAddressById(id);
        return "User address has been deleted successfully!";
    }

    @PutMapping("/userad/{id}")
    public UserAddress updateUserAddress(@PathVariable("id") Long id, @RequestBody UserAddress userAddress) {
        return userAddressService.updateUserAddress(id, userAddress);
    }
}
