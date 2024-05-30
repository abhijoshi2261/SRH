package com.ecommerce.web.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class Stock {

    @Id

    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long stock_id;
    private Long product_id;
    private Long Store_id;
    private Date Manufacturing_data;
    private Date Exp_date;

    public Long getStock_id() {
        return stock_id;
    }

    public void setStock_id(Long stock_id) {
        stock_id = stock_id;
    }

    public Long getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Long product_id) {
        this.product_id = product_id;
    }

    public Long getStore_id() {
        return Store_id;
    }

    public void setStore_id(Long store_id) {
        Store_id = store_id;
    }

    public Date getManufacturing_data() {
        return Manufacturing_data;
    }

    public void setManufacturing_data(Date manufacturing_data) {
        Manufacturing_data = manufacturing_data;
    }

    public Date getExp_date() {
        return Exp_date;
    }

    public void setExp_date(Date exp_date) {
        Exp_date = exp_date;
    }

    public String getQuantity() {
        return Quantity;
    }

    public void setQuantity(String quantity) {
        Quantity = quantity;
    }

    public Long getMin_Limit() {
        return Min_Limit;
    }

    public void setMin_Limit(Long min_Limit) {
        Min_Limit = min_Limit;
    }

    public Long getMRP() {
        return MRP;
    }

    public void setMRP(Long MRP) {
        this.MRP = MRP;
    }

    public Long getDiscount() {
        return Discount;
    }

    public void setDiscount(Long discount) {
        Discount = discount;
    }

    public Long getSale_Price() {
        return Sale_Price;
    }

    public void setSale_Price(Long sale_Price) {
        Sale_Price = sale_Price;
    }

    private String Quantity;
    private Long Min_Limit;
    private Long MRP;
    private Long Discount;
    private Long Sale_Price;

    public Stock(Long Stock_id, Long product_id, Long store_id, Date manufacturing_data, Date exp_date, String quantity,
            Long min_Limit, Long MRP, Long discount, Long sale_Price) {
        stock_id = Stock_id;
        this.product_id = product_id;
        Store_id = store_id;
        Manufacturing_data = manufacturing_data;
        Exp_date = exp_date;
        Quantity = quantity;
        Min_Limit = min_Limit;
        this.MRP = MRP;
        Discount = discount;
        Sale_Price = sale_Price;
    }

    public Stock() {

    }

    @Override
    public String toString() {
        return "Stock{" +
                "Stock_id=" + stock_id +
                ", product_id=" + product_id +
                ", Store_id=" + Store_id +
                ", Manufacturing_data=" + Manufacturing_data +
                ", Exp_date=" + Exp_date +
                ", Quantity='" + Quantity + '\'' +
                ", Min_Limit=" + Min_Limit +
                ", MRP=" + MRP +
                ", Discount=" + Discount +
                ", Sale_Price=" + Sale_Price +
                '}';
    }
}
