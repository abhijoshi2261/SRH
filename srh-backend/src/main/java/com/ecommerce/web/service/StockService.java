package com.ecommerce.web.service;

import com.ecommerce.web.entity.Stock;

import java.util.List;

public interface StockService {
    public Stock saveStock(Stock stock);

    public List<Stock> fetchStockList();

    public Stock fatchStockById(Long stock_id);

    public void deleteStockById(Long stock_id);

    public Stock updateStock(Long stock_id, Stock stock);
}
