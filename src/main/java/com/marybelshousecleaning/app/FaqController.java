package com.marybelshousecleaning.app;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.ArrayList;


@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class FaqController {
    @GetMapping("/faq")
    public List<FAQ> getFAQs() {
        List<FAQ> faqs = new ArrayList<>();

        faqs.add(new FAQ("What cities are you avaliable in?", 
        "Check out our avaliable cities at the bottom of the contact page. "));
        faqs.add(new FAQ("Do you do house cleaning for AirBnBs?", 
        "We do clean AirBnB homes, but please contact us to discuss a proper rate as each property has a different quote."));
        faqs.add(new FAQ("What times is best to contact you?", 
        "Our time business hours is the best time to contact us. You can find it on the contact page, or you can go to our website's footer. We do not answer calls past those times so please leave a message after hours."));

        return faqs;
    } 
        
}
