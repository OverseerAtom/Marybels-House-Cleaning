package com.marybelshousecleaning.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;

import com.marybelshousecleaning.app.dto.ContactFormDTO;

@Service
public class EmailService {
   
    @Autowired
    private SesClient sesClient;

    public void sendEmail(ContactFormDTO form) {
        String senderEmailAddress = "your-sender-email@example.com"; 
        String recipientEmailAddress = "recipient@example.com";
        
}
