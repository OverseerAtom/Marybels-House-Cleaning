package com.marybelshousecleaning.app.dto;

public class ContactFormDTO {
    private String FirstName;
    private String LastName;
    private String reasonForContact;
    private String email;
    private String message;


    public String getFirstName() {
        return FirstName;
    }

    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }
    public String getLastName () {
        return LastName;
    }
    public void setLastName(String LastName) {
        this.LastName = LastName;
    }
    public String getReasonForContact() {
        return reasonForContact;
    }
    public void setReasonForContact(String reasonForContact) {
        this.reasonForContact = reasonForContact;
    }

    public String getEmail () {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }

}