package com.marybelshousecleaning.app.controller;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.marybelshousecleaning.app.dto.BookAppointmentDTO;

@RestController
@RequestMapping("/api")
@CrossOrigin

public class BookAppointmentController {
    
    private final SesClient sesClient;

    public BookAppointmentController(SesClient sesClient) {
        this.sesClient = sesClient;
    }

    @PostMapping("/book-appointment")
    public ResponseEntity<String> submitQuote(@RequestBody BookAppointmentDTO quoteRequest) {

        // Validate data
        System.out.println("Validating Email Data...");
        String validationError = validateQuoteData(quoteRequest);
        if (validationError != null) {
            return new ResponseEntity<>(validationError, HttpStatus.BAD_REQUEST);
        }

        // Send email via AWS Simple Email Service (SES) using a template
        System.out.println("Sending Email...");
        try {
            sendNotificationEmail(quoteRequest);
            return new ResponseEntity<>("Appointment Booked", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Error sending email: " + e.getMessage());
            return new ResponseEntity<>("Failed to send email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private String validateQuoteData(BookAppointmentDTO quoteRequest) {
        if (quoteRequest.getFirstName() == null) return "Missing firstName";
        if (quoteRequest.getLastName() == null) return "Missing lastName";
        if (quoteRequest.getEmail() == null) return "Missing email";
        if (quoteRequest.getPhoneNumber() == null) return "Missing phoneNumbers";
        if (quoteRequest.getBedrooms() == null) return "Missing bedrooms";
        if (quoteRequest.getBathrooms() == null) return "Missing Bathrooms";
        if (quoteRequest.getSquareFeet() == null) return "Missing squareFeet";
        if (quoteRequest.getFrequency() == null) return "Missing frequency";
        if (quoteRequest.getDate() == null) return "Missing Date";
        if (quoteRequest.getTime () == null) return "Missing Time";
        if (quoteRequest.getStreetAddress() == null) return "Missing streetAddress";
        if (quoteRequest.getCity() == null) return "Missing city";
        if (quoteRequest.getState() == null) return "Missing state";
        if (quoteRequest.getZipCode() == null) return "Missing ZipCode";
        return null;
    }

    private void sendNotificationEmail(BookAppointmentDTO quoteRequest) {
        SendTemplatedEmailRequest request = SendTemplatedEmailRequest.builder()
                .destination(Destination.builder()
                        .toAddresses("gonzales5123@live.com")
                        .build())
                .template("Appointment_Email")
                .templateData(templateData(quoteRequest))
                .source("gonzales5123@live.com")
                .build();
        
        try {
            SendTemplatedEmailResponse response = sesClient.sendTemplatedEmail(request);
            System.out.println("SES Response: " + response.toString());
        } catch (SesException e) {
            System.out.println("Error while sending email: " + e.awsErrorDetails().errorMessage());
        }
        System.out.println("Email template is being created for client");
    }
    
    
    private String templateData(BookAppointmentDTO quoteRequest) {
        return String.format("{\"firstName\":\"%s\",\"lastName\":\"%s\",\"email\":\"%s\",\"phoneNumber\":\"%s\",\"bedrooms\":\"%s\",\"bathrooms\":\"%s\",\"squareFeet\":\"%s\",\"frequency\":\"%s\", \"date\":\"%s\", \"time\":\"%s\",\"streetAddress\":\"%s\",\"streetAddress2\":\"%s\",\"city\":\"%s\",\"state\":\"%s\",\"zipCode\":\"%s\"}",
        quoteRequest.getFirstName(),
        quoteRequest.getLastName(),
        quoteRequest.getEmail(),
        quoteRequest.getPhoneNumber(),
        quoteRequest.getBedrooms(),
        quoteRequest.getBathrooms(),
        quoteRequest.getSquareFeet(),
        quoteRequest.getFrequency(),
        quoteRequest.getDate(),
        quoteRequest.getTime(),
        quoteRequest.getStreetAddress(),
        quoteRequest.getStreetAddress2(),
        quoteRequest.getCity(),
        quoteRequest.getState(),
        quoteRequest.getZipCode());
    }
}