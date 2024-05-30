package com.ecommerce.web.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BillingAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;  // Primary key

    @NotBlank(message = "Order ID is required")
    private String orderId;  // Order ID

    @NotBlank(message = "User ID is required")
    private String userId;  // User ID

    @NotBlank(message = "Address Line 1 is required")
    private String addLine1;  // Address Line 1

    private String addLine2;  // Address Line 2 (optional)

    @NotBlank(message = "City is required")
    private String city;  // City

    @NotBlank(message = "State is required")
    private String state;  // State

    @NotBlank(message = "Pincode is required")
    private String pincode;  // Pincode

    @NotBlank(message = "Country is required")
    private String country;  // Country
}
