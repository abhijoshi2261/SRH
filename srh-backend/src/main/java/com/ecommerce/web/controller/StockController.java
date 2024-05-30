package com.ecommerce.web.controller;

import com.ecommerce.web.entity.Stock;
import com.ecommerce.web.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StockController {

    @Autowired
    private StockService stockService;

    @PostMapping("/stock")
    public Stock saveStock(@RequestBody Stock stock) {
        return stockService.saveStock(stock);
    }

    @GetMapping("/stock")
    public List<Stock> fetchStockList() {
        return stockService.fetchStockList();
    }

    @GetMapping("/stock/{id}")
    public Stock fatchStockById(@PathVariable("id") Long stock_id) {
        return stockService.fatchStockById(stock_id);
    }

    @DeleteMapping("/stock/{id}")
    public String deleteStockById(@PathVariable("id") Long stock_id) {
        stockService.deleteStockById(stock_id);
        return "The Data will removed!!!";
    }

    @PutMapping("/stock/{id}")
    public Stock updateStock(@PathVariable("id") Long stock_id,
            @RequestBody Stock stock) {
        return stockService.updateStock(stock_id, stock);
    }
}
