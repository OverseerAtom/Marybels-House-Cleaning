package com.marybelshousecleaning.app.dto;

public class LiveQuoteFormDTO {
    private String firstName;
    private String lastName;
    private String email;
    private String bedrooms;
    private String squareFeet;
    private String frequency;
    private String  streetAddress;
    private String streetAddress2;
    private String city;
    private String state;
    private String zipCode;



    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String FirstName) {
        this.firstName = FirstName;
    }
    public String getLastName () {
        return lastName;
    }
    public void setLastName(String LastName) {
        this.lastName = LastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    public String getBedrooms () {
        return bedrooms;
    }

    public void setBedrooms(String bedrooms) {
        this.bedrooms = bedrooms;
    }
    public String getSquareFeet() {
        return squareFeet;
    }
    public void setSquareFeet(String squareFeet) {
        this.squareFeet = squareFeet;
    }
    public String getFrequency() {
        return frequency;
    }
    public void setFrequency (String frequency) {
        this.frequency = frequency;
    }
    public String getStreetAddress() {
        return streetAddress;
    }
    public void setStreetAddress (String streetAddress) {
        this.streetAddress = streetAddress;
    }
    public String getStreetAddress2() {
        return streetAddress2;
    }
    public void setStreetAddress2 (String streetAddress2) {
        this.streetAddress2 = streetAddress2;
    }
    public String getCity () {
        return city;
    }
    public void setCity (String city) {
        this.city = city;
    }
    public String getState () {
        return state;
    }
    public void setState (String state) {
        this.state = state;
    }
    public String getZipcode () {
        return zipCode;
    }
    public void setZipcode (String zipCode) {
        this.zipCode = zipCode;
    }
}
