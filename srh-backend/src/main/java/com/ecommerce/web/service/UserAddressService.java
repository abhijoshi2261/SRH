package com.ecommerce.web.service;

import com.ecommerce.web.entity.UserAddress;

import java.util.List;

public interface UserAddressService {
    UserAddress saveUserAddress(UserAddress userAddress);

    List<UserAddress> fetchUserAddressList();

    UserAddress fetchUserAddressById(Long id);

    void deleteUserAddressById(Long id);

    UserAddress updateUserAddress(Long id, UserAddress userAddress);
}
