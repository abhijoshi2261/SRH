package com.ecommerce.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomersOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // Renamed to id for clarity

    @NotBlank(message = "Please provide Order ID")
    private String orderId; // Changed from order_id

    @NotBlank(message = "Please provide Product ID")
    private String productId; // Changed from Product_id

    @NotBlank(message = "Please provide Quantity")
    @Positive(message = "Quantity must be positive")
    private String quantity; // Changed from Quantity
}
