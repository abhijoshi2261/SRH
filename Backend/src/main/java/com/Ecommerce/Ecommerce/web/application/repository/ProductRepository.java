package com.Ecommerce.Ecommerce.web.application.repository;

import com.Ecommerce.Ecommerce.web.application.entity.Cart;
import com.Ecommerce.Ecommerce.web.application.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
