package com.ecommerce.web.repository;

import com.ecommerce.web.entity.VendorOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorOrderRepository extends JpaRepository<VendorOrder, Long> {
}
