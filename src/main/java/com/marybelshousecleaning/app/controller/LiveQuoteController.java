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

        // Generate the email body
        String emailBody = generateEmailBody(quoteRequest);
        
        // Send email via AWS Simple Email Service (SES)
        sendNotificationEmail(emailBody);

        return new ResponseEntity<>("Quote submitted successfully", HttpStatus.OK);
    }

    private String generateEmailBody(LiveQuoteFormDTO quoteRequest) {
        StringBuilder sb = new StringBuilder();
        sb.append("You have a new quote request from: ").append(quoteRequest.getFirstName()).append("\n");
        sb.append("Email: ").append(quoteRequest.getEmail()).append("\n");
        sb.append("Phone: ").append(quoteRequest.getPhone()).append("\n");
        sb.append("Service Type: ").append(quoteRequest.getServiceType()).append("\n");
        // Add other fields similarly
        return sb.toString();
    }

    private void sendNotificationEmail(String emailBody) {
        SendEmailRequest request = SendEmailRequest.builder()
                .destination(Destination.builder()
                        .toAddresses("your_email@example.com")
                        .build())
                .message(Message.builder()
                        .body(Body.builder()
                                .text(Content.builder()
                                        .charset("UTF-8")
                                        .data(emailBody)
                                        .build())
                                .build())
                        .subject(Content.builder()
                                .charset("UTF-8")
                                .data("New Quote Request")
                                .build())
                        .build())
                .source("noreply@example.com")
                .build();
        sesClient.sendEmail(request);
    }
}


