package com.marybelshousecleaning.app.config;

import software.amazon.awssdk.services.ses.SesClient;
import software.amazon.awssdk.regions.Region;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class awsConfiguration {
    
    @Bean
    private SesClient sesClient() {
        return SesClient.builder()
                .region(Region.US_WEST_1)
                .credentialsProvider(ProfileCredentialsProvider.create())
                .build();
    }
}
