package com.Ecommerce.Ecommerce.web.application.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VendorOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;  // Primary key

    @NotNull(message = "Order ID is required")
    private String orderId;  // Order ID

    @NotNull(message = "Product ID is required")
    private String productId;  // Product ID

    @NotNull(message = "Quantity is required")
    private Integer quantity;  // Quantity
}

