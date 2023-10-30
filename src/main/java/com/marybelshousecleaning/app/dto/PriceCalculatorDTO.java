package com.marybelshousecleaning.app.dto;

public class PriceCalculatorDTO {
    private String bedrooms;
    private String bathrooms;
    private Integer squareFeet;
    private String frequency;
    private String city;
    private Integer estimatedPrice;

    public String getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms (String bedrooms) {
        this.bedrooms = bedrooms;
    }
    public String getBathrooms() {
        return bathrooms;
    }
    public void setBathrooms (String bathrooms) {
        this.bathrooms = bathrooms;
    }
    public Integer getSquareFeet () {
        return squareFeet;
    }
    public void setSquareFeet (Integer squareFeet) {
        this.squareFeet = squareFeet;
    }
    public String getFrequency () {
        return frequency;
    }
    public void setFrequency (String frequency) {
        this.frequency = frequency;
    }
    public String getCity () {
        return city;
    }
    public void setCity (String city) {
        this.city = city;
    }
    public Integer getEstimatedPrice () {
        return estimatedPrice;
    }
    public void setEstimatedPrice (Integer estimatedPrice) {
        this.estimatedPrice = estimatedPrice;
    }
}
