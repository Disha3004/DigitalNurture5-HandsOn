package com.cognizant.spring_rest.controller;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(
            @RequestHeader("Authorization") String authHeader) {

        String user = getUser(authHeader);

        Map<String, String> map = new HashMap<>();
        map.put("token", user);   // Later we'll replace this with the JWT

        return map;
    }

    // <-- Create this method here
    private String getUser(String authHeader) {

        String encodedCredentials =
                authHeader.substring("Basic ".length());

        byte[] decoded =
                Base64.getDecoder().decode(encodedCredentials);

        String credentials =
                new String(decoded);

        return credentials.split(":")[0];
    }
}