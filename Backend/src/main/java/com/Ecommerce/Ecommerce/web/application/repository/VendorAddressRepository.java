package com.Ecommerce.Ecommerce.web.application.repository;

import com.Ecommerce.Ecommerce.web.application.entity.VendorAddress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorAddressRepository extends JpaRepository<VendorAddress, Long> {
}

