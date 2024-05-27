package com.Ecommerce.Ecommerce.web.application.service;

import com.Ecommerce.Ecommerce.web.application.entity.UserAddress;
import com.Ecommerce.Ecommerce.web.application.repository.UserAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UserAddressServiceImpl implements UserAddressService {

    @Autowired
    private UserAddressRepository userAddressRepository;

    @Override
    public UserAddress saveUserAddress(UserAddress userAddress) {
        return userAddressRepository.save(userAddress);
    }

    @Override
    public List<UserAddress> fetchUserAddressList() {
        return userAddressRepository.findAll();
    }

    @Override
    public UserAddress fetchUserAddressById(Long id) {
        return userAddressRepository.findById(id).orElse(null);
    }

    @Override
    public void deleteUserAddressById(Long id) {
        userAddressRepository.deleteById(id);
    }

    @Override
    public UserAddress updateUserAddress(Long id, UserAddress userAddress) {
        UserAddress userAddressDB = userAddressRepository.findById(id).orElse(null);

        if (userAddressDB != null) {
            if (Objects.nonNull(userAddress.getUserId()) && !"".equalsIgnoreCase(userAddress.getUserId())) {
                userAddressDB.setUserId(userAddress.getUserId());
            }
            if (Objects.nonNull(userAddress.getLine1()) && !"".equalsIgnoreCase(userAddress.getLine1())) {
                userAddressDB.setLine1(userAddress.getLine1());
            }
            if (Objects.nonNull(userAddress.getLine2())) {
                userAddressDB.setLine2(userAddress.getLine2());
            }
            if (Objects.nonNull(userAddress.getCity()) && !"".equalsIgnoreCase(userAddress.getCity())) {
                userAddressDB.setCity(userAddress.getCity());
            }
            if (Objects.nonNull(userAddress.getState()) && !"".equalsIgnoreCase(userAddress.getState())) {
                userAddressDB.setState(userAddress.getState());
            }
            if (Objects.nonNull(userAddress.getCountry()) && !"".equalsIgnoreCase(userAddress.getCountry())) {
                userAddressDB.setCountry(userAddress.getCountry());
            }
            if (Objects.nonNull(userAddress.getPincode()) && !"".equalsIgnoreCase(userAddress.getPincode())) {
                userAddressDB.setPincode(userAddress.getPincode());
            }
        }
        return userAddressRepository.save(userAddressDB);
    }
}
