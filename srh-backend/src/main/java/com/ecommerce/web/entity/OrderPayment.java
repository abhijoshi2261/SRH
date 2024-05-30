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
public class OrderPayment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id; // Primary key

    @NotBlank(message = "Transaction ID is required")
    private String txnId; // Transaction ID

    @NotBlank(message = "Order ID is required")
    private String orderId; // Order ID

    @NotBlank(message = "Payment mode is required")
    private String paymentMode; // Payment Mode

    @Positive(message = "Amount must be positive")
    private Double amount; // Amount

    @NotBlank(message = "Status is required")
    private String status; // Status
}
