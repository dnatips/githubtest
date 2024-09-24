package com.sbr.sbrhelloworld;

import java.time.*;
import java.time.format.DateTimeFormatter;

import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.*;

@RestController
public class SbRHelloWorldController {
    @GetMapping("hw")
    public Mono<String> greetingMessage() {
        return getIntroMessage()
            .zipWith(getFooterMessage())
            .map((value) -> {
                return value.getT1() + value.getT2();
            });
    }

    private Mono<String> getIntroMessage() {
        String introMessage = "Hi there! I am a REACTIVE SPRING BOOT App! How are you doing? <br />";
        return Mono.just(introMessage).delayElement(Duration.ofSeconds(5));
    }

    private Mono<String> getFooterMessage() {
        String dateTimeFormat = "dd/MM/yyyy hh:mm:ss a";
        String dateTimeMessage = LocalDateTime.now().format(
            DateTimeFormatter.ofPattern(dateTimeFormat));
        String footerMessage = String.format("Controller Object ID - %d : Now - %s <br />"
        , this.hashCode(), dateTimeMessage);
        return Mono.just(footerMessage).delayElement(Duration.ofSeconds(3));
    }
}
