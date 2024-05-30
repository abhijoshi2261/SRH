package com.ecommerce.web.repository;

import com.ecommerce.web.entity.Cart;
import com.ecommerce.web.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
