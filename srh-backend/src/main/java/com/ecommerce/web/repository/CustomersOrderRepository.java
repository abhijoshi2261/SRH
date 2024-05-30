package com.ecommerce.web.repository;

import com.ecommerce.web.entity.CustomersOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersOrderRepository extends JpaRepository<CustomersOrder, Long> {
}
