package com.sb.helloworld;

import org.springframework.web.bind.annotation.*;

import java.time.*;
import java.time.format.*;

@RestController
public class HelloController {
    
    @GetMapping("/")
    public String index() {
        String introMessage = "Hi there! I am a SPRING BOOT App. How are you doing? <br />";
        String message = introMessage + getFooterMessage();

        // message = message + TimeZone.getDefault().toString() + "<br />";
        return message;
    }

    private String getFooterMessage() {
        String dateTimeFormat = "dd/MM/yyyy hh:mm:ss a";
        String dateTimeMessage = LocalDateTime.now().format(
            DateTimeFormatter.ofPattern(dateTimeFormat));
        String footerMessage = String.format("Controller Object ID - %d : Now - %s <br />"
        , this.hashCode(), dateTimeMessage);
        return footerMessage;
    }
}
