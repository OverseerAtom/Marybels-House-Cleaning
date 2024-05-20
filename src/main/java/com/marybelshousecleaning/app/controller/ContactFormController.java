package com.marybelshousecleaning.app.controller;

import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.marybelshousecleaning.app.dto.ContactFormDTO;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ContactFormController {

    private final SesClient sesClient;

    public ContactFormController(SesClient sesClient) {
        this.sesClient = sesClient;
    }

    @PostMapping("/contact-form")
    public ResponseEntity<String> submitQuote(@RequestBody ContactFormDTO quoteRequest) {

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
            return new ResponseEntity<>("Owner Contacted", HttpStatus.OK);
        } catch (Exception e) {
            System.out.println("Error sending email: " + e.getMessage());
            return new ResponseEntity<>("Failed to send email", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private String validateQuoteData(ContactFormDTO quoteRequest) {
        if (quoteRequest.getFirstName() == null || quoteRequest.getFirstName().isEmpty()) return "Missing firstName";
        if (quoteRequest.getLastName() == null || quoteRequest.getLastName().isEmpty()) return "Missing lastName";
        if (quoteRequest.getEmail() == null || quoteRequest.getEmail().isEmpty()) return "Missing email";
        if (quoteRequest.getMessage() == null || quoteRequest.getMessage().isEmpty()) return "Missing message";
        if (quoteRequest.getReasonForContact() == null || quoteRequest.getReasonForContact().isEmpty()) return "Missing reasonForContact";
        return null;
    }

    private void sendNotificationEmail(ContactFormDTO quoteRequest) {
        SendTemplatedEmailRequest request = SendTemplatedEmailRequest.builder()
                .destination(Destination.builder()
                        .toAddresses("gonzales5123@live.com")
                        .build())
                .template("Contact_Us")
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

    private String templateData(ContactFormDTO quoteRequest) {
        return String.format("{\"firstName\":\"%s\",\"lastName\":\"%s\",\"email\":\"%s\",\"reasonForContact\":\"%s\",\"message\":\"%s\"}",
                quoteRequest.getFirstName(),
                quoteRequest.getLastName(),
                quoteRequest.getEmail(),
                quoteRequest.getReasonForContact(),
                quoteRequest.getMessage());
    }
}
