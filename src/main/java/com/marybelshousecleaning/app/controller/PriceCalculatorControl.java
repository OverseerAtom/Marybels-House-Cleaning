package com.marybelshousecleaning.app.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.math.BigDecimal;
import java.util.HashMap;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.marybelshousecleaning.app.dto.PriceCalculatorDTO;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PriceCalculatorControl {
    
    private static final HashMap<String, BigDecimal> cityRate = new HashMap<>();
    private static final HashMap<String, Integer> bathroomCost = new HashMap<>();
    private static final HashMap<String, Integer> frequencyDiscount = new HashMap<>();

    static {
        cityRate.put("San Francisco", new BigDecimal("0.15"));
        cityRate.put("Palo Alto", new BigDecimal("0.15"));
        cityRate.put("Los Altos", new BigDecimal("0.15"));
        cityRate.put("Fremont", new BigDecimal("0.12"));
        cityRate.put("Newark", new BigDecimal("0.12"));
        cityRate.put("Union City", new BigDecimal("0.12"));
        cityRate.put("Dublin", new BigDecimal("0.12"));
        cityRate.put("San Ramon", new BigDecimal("0.12"));
        cityRate.put("Pleasanton", new BigDecimal("0.12"));
        cityRate.put("Milpitas", new BigDecimal("0.13"));
        cityRate.put("San Jose", new BigDecimal("0.13"));
        cityRate.put("Hayward", new BigDecimal("0.13"));
        cityRate.put("Sunnyvale", new BigDecimal("0.13"));
        cityRate.put("Santa Clara", new BigDecimal("0.13"));
        cityRate.put("Foster City", new BigDecimal("0.14"));

        bathroomCost.put("None", 0);
        bathroomCost.put("1 bathroom", 0);
        bathroomCost.put("2 bathrooms", 25);
        bathroomCost.put("3 bathrooms", 50);
        bathroomCost.put("4 bathrooms", 75);
        bathroomCost.put("5+ bathrooms", 100);

        frequencyDiscount.put("One time service", 0);
        frequencyDiscount.put("1 time a month", -10);
        frequencyDiscount.put("2 times a month", -20);
        frequencyDiscount.put("3 times a month", -30);
        frequencyDiscount.put("4 times a month", -45);
        frequencyDiscount.put("Airbnb", -65);
    }

    @PostMapping("/calculate")
    public ResponseEntity<PriceCalculatorDTO> calculate(@RequestBody PriceCalculatorDTO request) {
        //calculation logic
        BigDecimal baseRate = cityRate.get(request.getCity());

        Integer squareFeet = request.getSquareFeet();
        BigDecimal squareFeetBigDecimal = new BigDecimal(squareFeet);

        BigDecimal baseTimesRate = baseRate.multiply(squareFeetBigDecimal);
        Integer wholeRate = baseTimesRate.intValue();

        
        Integer discount = frequencyDiscount.get(request.getFrequency());

        Integer minusDiscount = wholeRate - discount;

        Integer bathrooms = bathroomCost.get(request.getBathrooms());

        Integer estimatedPrice = minusDiscount + bathrooms;
        System.out.println(estimatedPrice);

        PriceCalculatorDTO response = new PriceCalculatorDTO();
        response.setEstimatedPrice(estimatedPrice);
        return ResponseEntity.ok(response);
    }
}
