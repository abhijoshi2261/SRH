package com.ecommerce.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VendorOrderDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // Primary key

    @NotBlank(message = "Order ID is required")
    private String orderId; // Order ID

    @NotBlank(message = "Product ID is required")
    private String productId; // Product ID

    @NotBlank(message = "Quantity is required")
    @Positive(message = "Quantity must be positive")
    private String quantity; // Quantity
}
