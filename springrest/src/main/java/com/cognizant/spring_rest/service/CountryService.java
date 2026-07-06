package com.cognizant.spring_rest.service;


import com.cognizant.spring_rest.model.Country;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    private final List<Country> countries = List.of(
            new Country("IN", "India"),
            new Country("US", "United States"),
            new Country("JP", "Japan"),
            new Country("DE", "Germany")
    );

    public Country getCountry(String code) {

        return countries.stream()
                .filter(c -> c.getCode().equalsIgnoreCase(code))
                .findFirst()
                .orElse(null);

    }

}