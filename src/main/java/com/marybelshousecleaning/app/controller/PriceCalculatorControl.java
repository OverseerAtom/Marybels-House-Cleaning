package com.marybelshousecleaning.app.controller;

import java.math.BigDecimal;
import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import software.amazon.awssdk.services.ses.endpoints.internal.Value.Int;
import software.amazon.ion.Decimal;

public class PriceCalculatorControl {
    
    @PostMapping("/calculate")

    public static void main(String[] args) {
        HashMap<String, BigDecimal> map = new HashMap<>();

        map.put("San Francisco", new BigDecimal("0.15"));
        map.put("Palo Alto", new BigDecimal("0.15"));
        map.put("Los Altos", new BigDecimal("0.15"));
        map.put("Fremont", new BigDecimal("0.12"));
        map.put("Newark", new BigDecimal("0.12"));

    }

    public ResponseEntity<MyResponse> calculate(@RequestBody MyRequest request) {
        // Your calculation logic here
        MyResponse response = new MyResponse();
        response.setData("Calculated data based on " + request.getInputData());
        
        return ResponseEntity.ok(response);
    }
}
