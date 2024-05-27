package com.Ecommerce.Ecommerce.web.application.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class VendorAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;  // Primary key

    @NotBlank(message = "User ID is required")
    private String userId;  // User ID

    @NotBlank(message = "Address Line 1 is required")
    private String line1;  // Address Line 1

    private String line2;  // Address Line 2 (optional)

    @NotBlank(message = "City is required")
    private String city;  // City

    @NotBlank(message = "State is required")
    private String state;  // State

    @NotBlank(message = "Country is required")
    private String country;  // Country

    @NotBlank(message = "Pincode is required")
    private String pincode;  // Pincode
}
