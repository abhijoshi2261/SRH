package com.ecommerce.web.repository;

import com.ecommerce.web.entity.BuyOrderDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BuyOrderDetailsRepository extends JpaRepository<BuyOrderDetails, Long> {
}
