package com.sbr.sbrhelloworld;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.*;

@RestController
public class SbRHelloWorldController {
    @GetMapping("hw")
    public Mono<String> greetingMessage() {
        return computeMessage();
    }

    private Mono<String> computeMessage() {        
        String introMessage = "Hi there! I am a REACTIVE SPRING BOOT App! How are you doing? <br />";
        String message = introMessage + getFooterMessage();

        return Mono.just(message);
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
