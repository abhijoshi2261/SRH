package com.ecommerce.web.repository;

import com.ecommerce.web.entity.VendorOrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorOrderDetailsRepository extends JpaRepository<VendorOrderDetails, Long> {
}
