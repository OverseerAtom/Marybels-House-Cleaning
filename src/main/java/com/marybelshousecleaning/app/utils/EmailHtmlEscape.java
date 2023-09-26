package com.marybelshousecleaning.app.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class EmailHtmlEscape {
    public static void main(String[] args) {
        try {
            // Read HTML content from the file "new-quote-email.html" located in the "templates" folder
            Path htmlPath = Paths.get("src/main/resources/templates/new-quote-email.html");
            String htmlContent = Files.readString(htmlPath);

            // Create a map to hold the JSON object key-values
            Map<String, String> jsonMap = new HashMap<>();
            jsonMap.put("TemplateName", "ComplexTemplate");
            jsonMap.put("SubjectPart", "New Quote Submitted");
            jsonMap.put("HtmlPart", htmlContent);
            jsonMap.put("TextPart", "New customer want a live quote.");

            // Use Jackson ObjectMapper to convert the map to JSON string
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonString = objectMapper.writeValueAsString(jsonMap);

            // Output the escaped JSON string
            System.out.println(jsonString);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
