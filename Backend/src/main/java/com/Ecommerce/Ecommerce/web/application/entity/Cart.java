package com.Ecommerce.Ecommerce.web.application.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cart {

    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)

    @NotBlank(message = "Please Add Cart Name")
    @Length(max = 5, min = 1)
    @Size(max = 10, min = 0)
    @Email
    @Positive
    @PositiveOrZero
    @Negative
    @NegativeOrZero
    @Future
    @FutureOrPresent
    @Past
    @PastOrPresent
    private Long Cart_id;
    private String User_id;
    private String Product_id;
    private String Quantity;



}
