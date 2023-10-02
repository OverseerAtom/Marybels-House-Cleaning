package com.marybelshousecleaning.app.controller;

import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.marybelshousecleaning.app.dto.LiveQuoteFormDTO;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class LiveQuoteController {

    private final SesClient sesClient;

    public LiveQuoteController(SesClient sesClient) {
        this.sesClient = sesClient;
    }

    @PostMapping("/quote")
    public ResponseEntity<String> submitQuote(@RequestBody LiveQuoteFormDTO quoteRequest) {
        
        // Validate data
        if (quoteRequest.getFirstName() == null || quoteRequest.getLastName() == null) {
            return new ResponseEntity<>("Missing required fields", HttpStatus.BAD_REQUEST);
        }

        // Send email via AWS Simple Email Service (SES) using a template
        sendNotificationEmail(quoteRequest);

        return new ResponseEntity<>("Quote submitted successfully", HttpStatus.OK);
    }

    private void sendNotificationEmail(LiveQuoteFormDTO quoteRequest) {
        SendTemplatedEmailRequest request = SendTemplatedEmailRequest.builder()
                .destination(Destination.builder()
                        .toAddresses("gonzales5123@live.com")
                        .build())
                .template("LiveQuoteEmail")
                .templateData(templateData(quoteRequest))
                .source("gonzales5123@live.com")
                .build();
        
        sesClient.sendTemplatedEmail(request);
    }

    private String templateData(LiveQuoteFormDTO quoteRequest) {
        return String.format("{\"firstName\":\"%s\",\"lastName\":\"%s\",\"email\":\"%s\",\"phone\":\"%s\",\"serviceType\":\"%s\"}",
        quoteRequest.getFirstName(),
        quoteRequest.getLastName(),
        quoteRequest.getEmail(),
        quoteRequest.getBedrooms(),
        quoteRequest.getSquareFeet(),
        quoteRequest.getFrequency(),
        quoteRequest.getStreetAddress(),
        quoteRequest.getStreetAddress2(),
        quoteRequest.getCity(),
        quoteRequest.getState(),
        quoteRequest.getZipcode());
    }
}


