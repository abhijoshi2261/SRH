package com.Ecommerce.Ecommerce.web.application.repository;

import com.Ecommerce.Ecommerce.web.application.entity.CustomersOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomersOrderRepository extends JpaRepository<CustomersOrder, Long> {
}
