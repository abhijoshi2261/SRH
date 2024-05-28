package com.Ecommerce.Ecommerce.web.application.repository;

import com.Ecommerce.Ecommerce.web.application.entity.UserAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {
}