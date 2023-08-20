package com.marybelshousecleaning.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.marybelshousecleaning.app.dto.ContactFormDTO;
import com.marybelshousecleaning.app.service.EmailService;

@RestController
@RequestMapping("/api")
public class ContactFormController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/submitForm")
    public ResponseEntity<String> submitForm(@RequestBody ContactFormDTO form) {
        emailService.sendEmail(form);
        return ResponseEntity.ok("Form submitted successfully");
    }
}
