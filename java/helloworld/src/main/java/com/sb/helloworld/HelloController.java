package com.sb.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

@RestController
public class HelloController {
    
    @GetMapping("/")
    public String index() {
        String dateTimeFormat = "dd/MM/yyyy hh:mm:ss a";
        String timeMessage = null;

        // SimpleDateFormat simpleDateFormat = new SimpleDateFormat(dateTimeFormat);
        // timeMessage = simpleDateFormat.format(new Date()).toString();

        timeMessage = LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateTimeFormat));
        
        String hiMessage = String.format("Hi there! I am %d.<br />", this.hashCode());
        return hiMessage + timeMessage;
    }
}
