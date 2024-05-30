package com.ecommerce.web.service;

import com.ecommerce.web.entity.Stock;
import com.ecommerce.web.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class StockServiceImpL implements StockService {

    @Autowired
    private StockRepository stockRepository;

    @Override
    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    @Override
    public List<Stock> fetchStockList() {
        return stockRepository.findAll();
    }

    @Override
    public Stock fatchStockById(Long stock_id) {
        return stockRepository.findById(stock_id).get();
    }

    @Override
    public void deleteStockById(Long stock_id) {
        stockRepository.deleteById(stock_id);
    }

    @Override
    public Stock updateStock(Long stockId, Stock stock) {
        Stock stockDB = stockRepository.findById(stockId).get();

        if (Objects.nonNull(stock.getStock_id()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getStock_id()))) {
            stockDB.setStock_id(stock.getStock_id());
        }

        if (Objects.nonNull(stock.getProduct_id()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getProduct_id()))) {
            stockDB.setProduct_id(stock.getProduct_id());
        }

        if (Objects.nonNull(stock.getDiscount()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getDiscount()))) {
            stockDB.setDiscount(stock.getDiscount());
        }

        if (Objects.nonNull(stock.getQuantity()) &&
                !"".equalsIgnoreCase(stock.getQuantity())) {
            stockDB.setQuantity(stock.getQuantity());
        }

        if (Objects.nonNull(stock.getMRP()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getMRP()))) {
            stockDB.setMRP(stock.getMRP());
        }

        if (Objects.nonNull(stock.getExp_date()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getExp_date()))) {
            stockDB.setExp_date(stock.getExp_date());
        }

        if (Objects.nonNull(stock.getMin_Limit()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getMin_Limit()))) {
            stockDB.setMin_Limit(stock.getMin_Limit());
        }

        if (Objects.nonNull(stock.getSale_Price()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getSale_Price()))) {
            stockDB.setSale_Price(stock.getSale_Price());
        }

        if (Objects.nonNull(stock.getStore_id()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getStore_id()))) {
            stockDB.setStore_id(stock.getStore_id());
        }

        if (Objects.nonNull(stock.getManufacturing_data()) &&
                !"".equalsIgnoreCase(String.valueOf(stock.getManufacturing_data()))) {
            stockDB.setManufacturing_data(stock.getManufacturing_data());
        }

        return stockRepository.save(stockDB);

    }
}
