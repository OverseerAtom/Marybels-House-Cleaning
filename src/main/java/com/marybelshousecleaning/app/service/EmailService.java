package com.marybelshousecleaning.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.services.ses.model.*;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;



import com.marybelshousecleaning.app.dto.ContactFormDTO;

@Service
public class EmailService {
   
    @Autowired
    private SesClient sesClient;

    public void sendEmail(ContactFormDTO form) {
        String senderEmailAddress = "gonzales5123@live.com";
        String recipientEmailAddress = "gonzales5123@live.com";

        String emailTemplate = "";
        String emailContent = "";
        try {
            emailTemplate = loadEmailTemplateFromFile("");
            emailContent = replacePlaceholders(emailTemplate, form);
        } catch (IOException e) {
            e.printStackTrace();
        }

        

        SendEmailRequest request = SendEmailRequest.builder()
            .source(senderEmailAddress)
            .destination(Destination.builder().toAddresses(recipientEmailAddress).build())
            .message(Message.builder()
                    .subject(Content.builder().data("New Contact Form Submission").build())
                    .body(Body.builder().html(Content.builder().data(emailContent).build()).build())
                    .build())
            .build();

        SendEmailResponse response = sesClient.sendEmail(request);
        System.out.println("Email sent. Message ID: " + response.messageId());
    }

        private String loadEmailTemplateFromFile(String filePath) throws IOException {
            Path path = Paths.get("../../../../../resources/templates/email-inlined.html");
            byte[] bytes = Files.readAllBytes(path);
            return new String(bytes, StandardCharsets.UTF_8);
        }

        private String replacePlaceholders(String template, ContactFormDTO form) {
            return template.replace("{{ firstName }}", form.getFirstName())
                        .replace("{{ lastName }}", form.getLastName())
                        .replace("{{ email }}", form.getEmail())
                        .replace("{{ reasonForContact }}", form.getReasonForContact())
                        .replace("{{ message }}", form.getMessage());
        }
    
}
