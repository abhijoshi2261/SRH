package com.Ecommerce.Ecommerce.web.application.repository;

import com.Ecommerce.Ecommerce.web.application.entity.ShippingAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippingAddressRepository extends JpaRepository<ShippingAddress, Long> {
}
