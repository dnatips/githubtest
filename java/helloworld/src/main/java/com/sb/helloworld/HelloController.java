package com.sb.helloworld;

import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.time.format.*;

@RestController
public class HelloController {
    
    @GetMapping("/")
    public String index() {
        String dateTimeFormat = "dd/MM/yyyy hh:mm:ss a";
        String timeMessage = null;

        timeMessage = LocalDateTime.now().format(DateTimeFormatter.ofPattern(dateTimeFormat));
        
        String hiMessage = String.format("Hi there! I am %d.<br />", this.hashCode());
        return hiMessage + timeMessage;
    }
}
